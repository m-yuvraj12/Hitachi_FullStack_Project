import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
const validateSimAction:any=()=>{
    return (dispatch:Dispatch)=>{
        return axios.get('http://localhost:3000/api/validateSimReact')
        .then(res=>{
            dispatch({
                type:"VALIDATE_SIM",
                payload:res.data,  
            })
        })


    }

}
export default validateSimAction;