import { createContext, useReducer } from "react";
import SportReducer from "./SportReducer";

const SportContext = createContext()

export const SportProvider = ({children})=>{

    const initialState = {
        sports : []
    }

    const [state,dispatch] = useReducer(SportReducer,initialState)
    return(
        <SportContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </SportContext.Provider>
    )
}
export default SportContext