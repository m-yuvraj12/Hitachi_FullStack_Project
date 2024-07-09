const offersReducer=(state={dataOffers:[]},action:any)=>{
    switch(action.type) {
        case 'OFFERS':
            return {...state,dataOffers:action.payload};
        default:
            return state;
    }
}

export default offersReducer;