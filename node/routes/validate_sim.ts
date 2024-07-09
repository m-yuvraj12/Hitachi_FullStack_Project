import express,{Response , Request, query} from 'express';
import {pool} from '../db/db';
import validateSim from '../controllers/customerController';
const app = express.Router();
app.use(express.json());



app.post('/', async (req:Request, res:Response) => {
    const {simNumber,serviceNumber}=req.body;
    if(validateSim(simNumber , serviceNumber)){
        const queryId=`select * from simdetails where service_number='${serviceNumber}' 
        and sim_number='${simNumber}'`;
        try{
            const queryIdResult = await pool.query(queryId);
            const sim_status=queryIdResult.rows[0].sim_status;
            
            if(queryIdResult.rows.length>0 && sim_status==='Active'){
                const sim_id=queryIdResult.rows[0].sim_id;
                const selectQuery= `select simoffers.call_qty ,simoffers.data_qty, simoffers.cost ,
                simoffers.duration from simoffers INNER JOIN simdetails ON 
                simoffers.sim_id=simdetails.sim_id where simoffers.sim_id=${sim_id};`;
                const selectQueryResult = await pool.query(selectQuery);
                const call_qty=selectQueryResult.rows[0].call_qty;
                const data_qty=selectQueryResult.rows[0].data_qty;
                const cost=selectQueryResult.rows[0].cost;
                const duration=selectQueryResult.rows[0].duration;
                res.send({
                    "success":true,
                    "data":`${call_qty} calls + ${data_qty} GB for Rs. ${cost} , Validty ${duration}`
                })
            }
            else{
                res.json({error:'please check the sim and service number'})
            }
        }
        catch(err){
            res.json({message:'error ocuured while fetchingthe data'})
        }  
    }
    else{
        res.send('check the length of the sim details');
    }
})

module.exports=app
