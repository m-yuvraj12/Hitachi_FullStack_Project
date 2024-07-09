import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SimCardIcon from '@mui/icons-material/SimCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import UpdateIcon from '@mui/icons-material/Update';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Button } from '@mui/material';
import { Outlet ,useNavigate } from 'react-router-dom';
const SideBar=()=>{
    const navigate=useNavigate();
    return (
        <>
            <div style={{backgroundColor:"rgb(2, 33, 61)",height:"85vh",maxHeight:"200vh"}}>
                <div>
                    <Button onClick={()=>navigate("/customers")} style={{width:"100%",justifyContent:"left",display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <AccountCircleIcon style={{paddingRight:"10px",color:"white"}}/>
                        <p style={{color:"white"}}>All Customers</p>
                    </Button>
                    <Button onClick={()=>navigate("/validatesim")} style={{width:"100%",justifyContent:"left",display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <SimCardIcon style={{ paddingRight:"10px",color:"white"}}/>
                        <p style={{color:"white"}}>Validate Sim</p>
                    </Button>
                    <Button onClick={()=>navigate("/validatecustomer")} style={{width:"100%",justifyContent:"left",display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <HowToRegIcon style={{ paddingRight:"10px",color:"white"}}/>
                        <p style={{color:"white"}}>Validate Customer</p>
                    </Button>
                    <Button onClick={()=>navigate("/validatecustomerdetails")} style={{width:"100%",justifyContent:"left",display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <UpdateIcon style={{ paddingRight:"10px",color:"white"}}/>
                        <p style={{color:"white"}}>Validate Customer Details</p>
                    </Button>
                    <Button onClick={()=>navigate("/validateID")} style={{width:"100%",justifyContent:"left",display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <HomeIcon style={{ paddingRight:"10px",color:"white"}}/>
                        <p style={{color:"white"}}>Validate ID Proof</p>
                    </Button>
                    <Button onClick={()=>navigate("/offers")} style={{width:"100%",justifyContent:"left",display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <VerifiedIcon style={{ paddingRight:"10px",color:"white"}}/>
                        <p style={{color:"white"}}>Show Special Offers</p>
                    </Button>

                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default SideBar;