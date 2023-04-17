const SportReducer = (state,action)=>{
    switch(action.type){
        case "SPORT_NEWS":
            return{
                ...state,
                sports : action.payload
            }
            default:

                return state
    }
}

export default SportReducer