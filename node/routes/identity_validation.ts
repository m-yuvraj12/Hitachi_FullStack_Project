import express,{Response , Request, query} from 'express';
import {pool} from '../db/db';
const app = express.Router();
app.use(express.json());

import { validateAadhar , validateFirstName, validateLastName ,validateDate} from '../controllers/customerController';

app.post('/:unique_id_number',async (req:Request,res:Response)=>{
    const unique_id=req.params.unique_id_number
    const {aadhar_number,first_name,last_name,dob} = req.body
    const idQuery = `select * from customeridentity where unique_id_number='${(unique_id)}'`
    const id=await pool.query(idQuery)
    if(id.rows[0]!=undefined){
        if(validateAadhar(aadhar_number)){
            if(validateFirstName(first_name) && validateLastName(last_name) && validateDate(dob)){
                const sql_dob=id.rows[0].date_of_birth.toString();
                const month:string[]=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                const sql_month=sql_dob.substr(4,3);
                const sql_year=sql_dob.substr(11,4);
                const sql_date=sql_dob.substr(8,2);
                let numeric_month="";
                for(let i=0; i<month.length; i++){
                    if(month[i]==sql_month){
                        numeric_month+=i+1;
                    }
                }
                
                const resultant=`${sql_year}-${numeric_month}-${sql_date}`
                console.log(resultant);
                
                
                if(id.rows[0].aadhar_no==aadhar_number && id.rows[0].first_name==first_name && id.rows[0].last_name && resultant==dob){
                    const simStatusQuery=`update simdetails set sim_status='Active' where sim_number='${id.rows[0].sim_number}'`
                    await pool.query(simStatusQuery)
                    res.json({success:true,message:"Valid Customer! SIM activated successfully"})
                }
                else{
                    res.json({error:"Details did not match"})
                }
            }
            else{
                res.json({error:"Invalid details:Enter the firstname and lastname and date of birth in yyyy-mm-dd"})
            }
        }
        else{
            res.json({error:"Aadhar number should be 12 digits nymber"})
        }
    }
    else{
        res.json({error:"Customer not found"})
    }
})

module.exports=app