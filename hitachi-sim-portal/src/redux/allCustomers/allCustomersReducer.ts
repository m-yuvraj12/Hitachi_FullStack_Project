const allCustomersReducer=(state={data:[]},action:any)=>{
    switch(action.type){
        case 'All_CUSTOMERS':
            return {...state,data:action.payload}
        default:
            return state
    }
}

export default allCustomersReducer;