import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
const allCustomersAction:any=()=>{
    return (dispatch:Dispatch)=>{
        return axios.get('http://localhost:3000/api/customers')
        .then(res=>{
            dispatch({
                type:"All_CUSTOMERS",
                payload:res.data,  
            })
        })


    }

}
export default allCustomersAction;