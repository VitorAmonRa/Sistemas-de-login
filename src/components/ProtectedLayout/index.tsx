import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/useAuth"
import { NoAcess } from "../NoAcess";

export const ProtectedLayout = ({children}:{ children: JSX.Element }) => {

    const auth  = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loading
    },[])

    if(!auth?.email){
        return (
        <>
            <NoAcess/>
        </>
        )
    }
    
return children;
}