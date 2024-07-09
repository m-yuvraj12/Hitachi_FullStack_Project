import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import allCustomersAction from "../redux/allCustomers/allCustomersAction"
import './Customers.css';


const Customers=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(allCustomersAction());
    })

    const {data}=useSelector((state:any)=>{
        return state.allCustomers;
    })
    return (
        <>
          <div style={{marginLeft:"1%"}}>
            <h2>Customers</h2>
            <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                    {
                        data.map((item:any)=>{
                            return(
                                <tr>
                                    <td>{item.first_name}</td>
                                    <td>{item.email_address}</td>
                                    <td>{item.date_of_birth.toString().substr(0,10)}</td>
                                    <td>{item.state}</td>
                                </tr>
                            )
                        })
                    }
              </tbody>
            </table>
            </div>
          </div>
        </>
      );
}
export default Customers;