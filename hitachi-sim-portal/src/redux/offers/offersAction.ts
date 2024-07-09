import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
const offersAction:any=()=>{
    return (dispatch:Dispatch)=>{
        return axios.get('http://localhost:3000/api/simOffersReact')
        .then(res=>{
            dispatch({
                type:"OFFERS",
                payload:res.data,  
            })
        })


    }

}
export default offersAction;