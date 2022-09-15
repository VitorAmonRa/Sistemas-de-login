import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth"
import { LoginPage } from "../../pages/LoginPage";

export const ProtectedLayout = ({children}:{ children: JSX.Element }) => {

    const auth  = useAuth();

    if(!auth?.email){
        return <h1>Voce nao tem acesso</h1>
    }

    return children;
}