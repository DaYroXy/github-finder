import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer"

const GithubContext = createContext();

export const GithubProvider = ({children}) => {
    
    const initalState = {
        users: [],
        user: {},
        repos: [],
        Loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initalState)


    // const clearUsers = () => {
    //     dispatch({
    //         type: 'CLEAR_USERS',
    //     })
    // }

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext