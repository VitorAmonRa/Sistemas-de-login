import { useAuth } from "../../contexts/useAuth"
import { NoAcess } from "../NoAcess";

export const ProtectedLayout = ({children}:{ children: JSX.Element }) => {

    const auth  = useAuth();

    if(!auth?.email){
        return (
        <>
            <NoAcess/>
        </>
        )

    }
return children;
}