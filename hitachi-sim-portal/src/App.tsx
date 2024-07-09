import './App.css';
import Customers from './components/Customers';
import Offers from './components/Offers';
import SideBar from './components/SideBar';
import ValidateCustomer from './components/ValidateCustomer';
import ValidateCustomerDetails from './components/ValidateCustomerDetails';
import ValidateIDProof from './components/ValidateIDProof';
import ValidateSim from './components/ValidateSim';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideBar/>}>
      <Route path="/customers" element={<Customers/>} />
        <Route path="validatesim" element={<ValidateSim/>} />
        <Route path="validatecustomer" element={<ValidateCustomer/>} />
        <Route path="validatecustomerdetails" element={<ValidateCustomerDetails/>} />
        <Route path="validateID" element={<ValidateIDProof/>} />
        <Route path="offers" element={<Offers/>} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
