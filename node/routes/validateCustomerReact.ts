import express,{Response , Request, query} from 'express';
import {pool} from '../db/db';
const app = express.Router();
app.use(express.json());



app.get('/', async (req:Request, res:Response) => {
    const queryId=`SELECT * FROM customeridentity`;
    const queryIdResult = await pool.query(queryId);
    res.json(queryIdResult.rows);
})

module.exports=app
