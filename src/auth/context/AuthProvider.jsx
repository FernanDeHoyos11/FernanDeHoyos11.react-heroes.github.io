import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { autchReducer } from "./authReducer"
import { types } from "../types/types"



const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return{
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [AuthState, dispatch] = useReducer(autchReducer, {}, init)

    const login = (name = '') => {
        const user = {id: 'ABC', name: name}
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = {type: types.logout}
        dispatch(action)
    }

    return(
        <AuthContext.Provider value={{
            ...AuthState,
            login: login,
            logout: logout
            }}>
              {children}
        </AuthContext.Provider>
    )
}