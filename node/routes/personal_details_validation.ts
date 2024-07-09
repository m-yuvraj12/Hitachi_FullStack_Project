import express,{Response , Request, query} from 'express';
import {pool} from '../db/db';
const app = express.Router();
app.use(express.json());

import { validateFirstName , validateLastName ,validateEmail } from '../controllers/customerController';

app.post('/', async (req: Request, res: Response) => {
    const { firstName, lastName ,email } = req.body;
    if (validateFirstName(firstName) && validateLastName(lastName) && validateEmail(email)) { 
        try {
            const custquery = `select email_address,first_name,last_name from customer where email_address='${email}'`
            const custdetails = await pool.query(custquery);
            if(custdetails.rows[0]==undefined){
                res.json({ error: "Invalid email details" })
            }
            else if ( custdetails.rows[0].first_name==firstName && custdetails.rows[0].last_name==lastName) {
                res.json({ success: true, message: "Customer personal details validated successfully" })
            }
            else {
                throw new Error();
            }
        }
        catch (error) {
            res.json({ error: "No customer found for the provided details" })
        }
    }
    else {
        res.json({ error: "firstname/lastname should be a maximum of 15 characters and accept only alphabets" })
    }
})

module.exports=app