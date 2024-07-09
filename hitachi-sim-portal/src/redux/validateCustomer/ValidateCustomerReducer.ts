const ValidateCustomerReducer=(state={data:[]},action:any)=>{
    switch(action.type){
        case 'VALIDATE_CUSTOMER':
            return {...state,data:action.payload}
        default:
            return state
    }
}

export default ValidateCustomerReducer;