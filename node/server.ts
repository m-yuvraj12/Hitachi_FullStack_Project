import express,{Request,Response} from 'express';

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use(express.json());
// const validateSim =require('./routes/validate_sim')
// const validateCustomer=require('./routes/customer_validation')
// const vpersonaldetails=require('./routes/personal_details_validation')
// const updateCustomerAddress=require('./routes/customer_address_update')
// const vIdProof=require('./routes/identity_validation')


//for react
const customers=require('./routes/customers');
const validateSimReact=require('./routes/validateSimReact');
const validateCustomerReact=require('./routes/validateCustomerReact');
const simOffersReact=require('./routes/simOffersReact');



// app.use('/api/validate-sim',validateSim)
// app.use('/api/validate-customer',validateCustomer)
// app.use('/api/validate-personal-details',vpersonaldetails)
// app.use('/api/update-customer-address',updateCustomerAddress)
// app.use('/api/validate-id-proof',vIdProof)


//for react
app.use('/api/customers',customers)
app.use('/api/validateSimReact',validateSimReact)
app.use('/api/validateCustomerReact',validateCustomerReact)
app.use('/api/simOffersReact',simOffersReact)

app.listen(3000,()=>{
    console.log('connected to the port 3000')
})