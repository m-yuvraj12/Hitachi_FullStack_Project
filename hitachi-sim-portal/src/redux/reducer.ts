import { combineReducers } from "@reduxjs/toolkit";
import allCustomersReducer from "./allCustomers/allCustomersReducer";
import validateSimReducer from "./validateSim/validateSimReducer";
import ValidateCustomerReducer from "./validateCustomer/ValidateCustomerReducer";
import offersReducer from "./offers/offersReducer";

const rootReducer=combineReducers({
    allCustomers:allCustomersReducer,
    validateSim:validateSimReducer,
    validateCustomer:ValidateCustomerReducer,
    offers:offersReducer,
})

export default rootReducer;