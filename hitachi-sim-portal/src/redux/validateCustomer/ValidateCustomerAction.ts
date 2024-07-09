import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
const ValidateCustomerAction:any=()=>{
    return (dispatch:Dispatch)=>{
        return axios.get('http://localhost:3000/api/validateCustomerReact')
        .then(res=>{
            dispatch({
                type:"VALIDATE_CUSTOMER",
                payload:res.data,  
            })
        })


    }

}
export default ValidateCustomerAction;