import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import validateSimAction from '../redux/validateSim/validateSimAction'
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import offersAction from "../redux/offers/offersAction";

const Offers=()=>{

    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(validateSimAction())
    })

    useEffect(()=>{
        dispatch(offersAction())
    })



    const {data}=useSelector((state:any)=>state.validateSim);
    const {dataOffers}=useSelector((state:any)=>state.offers);

    const [sim,setSim]=useState("");
    const [service,setService]=useState("");
    // const [id,setId]=useState(-1);

    const [show,setShow]=useState("empty");
    let id:number;
    const [callqty,setCallqty]=useState("");
    const [cost,setCost]=useState("");
    const [duration,setDuration]=useState("");
    

    const verifyDetails=()=>{
        let value="unverified";
        {

            data.map((item:any,index:any)=>{
                {
                    if(item.service_number===service && item.sim_number===sim){
                        value="verified";
                        id=item.sim_id;
                    }
                }
                
            })

        }
        
        {

            dataOffers.map((item:any,index:any)=>{
                {
                    if(item.sim_id===id){
                        setCallqty(item.call_qty);
                        setCost(item.cost);
                        setDuration(item.duration);
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
                <h2 style={{paddingLeft:"10%"}}>Check Special Offers</h2>
                <div style={{paddingLeft:"40%"}}>
                    <input type="text" placeholder="enter sim number" onChange={(e)=>setSim(e.target.value)} style={{height:"100%" ,paddingLeft:"10%",paddingTop:"3%",paddingBottom:"3%",marginBottom:"3%"}}/><br/>
                    <input type="text" placeholder="enter service number" onChange={(e)=>setService(e.target.value)} style={{height:"100%" ,paddingLeft:"10%",paddingTop:"3%",paddingBottom:"3%",marginBottom:"3%"}}/><br/>
                    <Button onClick={verifyDetails} style={{height:"100%",width:"40%",paddingTop:"3%",paddingBottom:"3%",marginBottom:"3%"}}>Check Offers</Button>
                    
                    <div style={{display:"flex",marginLeft:"-5%",marginBottom:"5%"}}>
                        {show==="correct" && 
                        <div style={{backgroundColor:"green",color:"white",padding:"1%",width:"40%"}}>
                            <p>Sim validated successfully</p>
                        </div>}
                        {show==="correct"  && <button style={{backgroundColor:"green",color:"white",padding:"1%",width:"7%",border:"0"}} onClick={update}><CloseIcon/></button>}
                        
                    </div>

                    <div style={{display:"flex",marginLeft:"-5%",marginBottom:"5%"}}>
                        {show==="wrong" && 
                        <div style={{backgroundColor:"red",color:"white",padding:"1%",width:"40%"}}>
                            <p>Sim and service number combination not found</p>
                        </div>}
                        {show==="wrong"  && <button style={{backgroundColor:"red",color:"white",padding:"1%",width:"7%",border:"0"}} onClick={update}><CloseIcon/></button>}
                        
                    </div>
                </div>
                <div style={{height:"100%",width:"30%",margin:"5%",  boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                
                {
                    cost &&                
                    <div style={{width:"100%"}}>
                        Total call minutes:{callqty}<br/>
                        Total cost:{cost}<br/>
                        Total duration in minutes: {duration}
                    </div>
                }
                


            </div>
            </div>

        </>
    )
}
export default Offers;