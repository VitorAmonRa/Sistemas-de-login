import { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser } from './type';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";


export const AuthContext = createContext<IContext | null>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage()

        user ? setUser(user) : null;
    },[])

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        console.log("login", email,password)
        const payload = {token: response.token, email, password}
        
        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout () {
        setUser(null);
        setUserLocalStorage(null);
    }

    return(
        <AuthContext.Provider value = {{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}