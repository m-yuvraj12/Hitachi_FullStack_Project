const validateSimReducer=(state={data:[]},action:any)=>{
    switch(action.type) {
        case 'VALIDATE_SIM':
            return {...state,data:action.payload};
        default:
            return state;
    }
}

export default validateSimReducer;