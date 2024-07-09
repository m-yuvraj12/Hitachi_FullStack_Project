import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ValidateCustomerAction from "../redux/validateCustomer/ValidateCustomerAction";

const ValidateCustomerDetails=()=>{

    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(ValidateCustomerAction())
    })

    const {data}=useSelector((state:any)=>state.validateCustomer);

    const [email,setEmail]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");


    const [show,setShow]=useState("empty");



    const verifyDetails=()=>{
        let value="unverified";
        {

            data.map((item:any,index:any)=>{
                {
                    if(item.first_name===firstName && item.last_name===lastName && item.email_address===email){
                        value="verified";
                    }
                }
                
            })

        }
        {value==="verified" ? setShow("correct"):setShow("wrong")}
    }

    const update=()=>{
        setShow("empty");
    }
    return (
        
        <>
            <div style={{height:"100%",width:"60%",margin:"5%",  boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <h2 style={{paddingLeft:"10%"}}>Validate Customer Details</h2>
                <div style={{paddingLeft:"40%"}}>
                    <input type="text" placeholder="first name" onChange={(e)=>setFirstName(e.target.value)} style={{height:"100%",width:"30%" ,paddingLeft:"10%",paddingTop:"3%",paddingBottom:"3%",marginBottom:"3%"}}/><br/>
                    <input type="text" placeholder="last name" onChange={(e)=>setLastName(e.target.value)} style={{height:"100%",width:"30%" ,paddingLeft:"10%",paddingTop:"3%",paddingBottom:"3%",marginBottom:"3%"}}/><br/>
                    <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} style={{height:"100%" ,width:"30%" ,paddingLeft:"10%",paddingTop:"3%",paddingBottom:"3%",marginBottom:"3%"}}/><br/>
                    
                    <Button onClick={verifyDetails} style={{height:"100%",width:"40%",paddingTop:"3%",paddingBottom:"3%",marginBottom:"3%"}}>Validate</Button>
                    
                    <div style={{display:"flex",marginLeft:"-5%",marginBottom:"5%"}}>
                        {show==="correct" && 
                        <div style={{backgroundColor:"green",color:"white",padding:"1%",width:"40%"}}>
                            <p>Customer details validated successfully</p>
                        </div>}
                        {show==="correct"  && <button style={{backgroundColor:"green",color:"white",padding:"1%",width:"7%",border:"0"}} onClick={update}><CloseIcon/></button>}
                        
                    </div>

                    <div style={{display:"flex",marginLeft:"-5%",marginBottom:"5%"}}>
                        {show==="wrong" && 
                        <div style={{backgroundColor:"red",color:"white",padding:"1%",width:"40%"}}>
                            <p>Invalid customer ! This customer doesn't exist</p>
                        </div>}
                        {show==="wrong"  && <button style={{backgroundColor:"red",color:"white",padding:"1%",width:"7%",border:"0"}} onClick={update}><CloseIcon/></button>}
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default ValidateCustomerDetails;