import express,{Response , Request, query} from 'express';
import {pool} from '../db/db';
const app = express.Router();
app.use(express.json());

import { validateEmail , validateDate } from '../controllers/customerController';


app.post('/', async (req: Request, res: Response) => {
    const { email, dob } = req.body;
    if (validateEmail(email) && validateDate(dob)){ 
        try {
            const custquery = `select email_address,date_of_birth from customer where email_address='${email}' and date_of_birth='${dob}'`
            const custdetails = await pool.query(custquery)
            if (custdetails.rows[0]!=undefined) {
                res.json({ success: true, message: "Customer details validated successfully" })
            }
            else {
                throw new Error();
            }
        }
        catch (error) {
            res.json({ error: "No request placed for you" })
        }
    }
    else if(!validateEmail(email)){
        res.json({ error: "Invalid email" });
    }
    else if (!validateDate(dob)) {
        res.json({ error: "Invalid date of birth" })
    }
    else {
        res.json({ error: "Invalid email and password" })
    }
})

module.exports=app