const EnterReducer = (state,action)=>{
    switch(action.type){
        case "ENTER_NEWS":
            return{
                ...state,
                entertainments : action.payload
            }

            default:
                return state
    }
}

export default EnterReducer