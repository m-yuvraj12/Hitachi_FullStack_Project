import {Pool} from 'pg';

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'Hitachi_mobile',
    password:'Yuvraj@123',
    port:5432,
})

