import express,{Response , Request, query} from 'express';
import {pool} from '../db/db';
const app = express.Router();
app.use(express.json());

import { validateAddress , validatePin ,validateCity ,validateState } from '../controller/customerController';
app.put('/:unique_id_number', async (req: Request, res: Response) => {
    const unique_id_number = req.params.unique_id_number
    const { address, pincode, city, state } = req.body
    const idquery = `select * from customeraddress join customer on customer.customer_address_id=customeraddress.address_id where unique_id_number='${unique_id_number}'`
    const id = await pool.query(idquery)
    if (id.rows[0] != undefined) {
        if (validateAddress(address)) {
            if (validatePin(pincode)) {
                if (validateCity(city) && validateState(state)) {
                    const updateQuery = `update customeraddress set address_id=${id.rows[0].address_id},address='${address}',pincode='${pincode}',city='${city}',state='${state}' where address_id=${id.rows[0].address_id}`
                    await pool.query(updateQuery)
                    res.json({ success: true, message: "Customer address updated successfully." })
                }
                else {
                    res.json({ error: "City/State must not contain any special characters" })
                }
            }
            else {
                res.json({ error: "Pincode must be 6 digits numeric value" })
            }
        }
        else {
            res.json({ error: "Address must be 25 characters long." })
        }
    }
    else {
        res.json({ error: "Customer not found" })
    }
})
module.exports=app