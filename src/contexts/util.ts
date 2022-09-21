import { Api } from "../services/api"
import { IUser } from "./type";

export const setUserLocalStorage = (user: IUser | null) =>{
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUserLocalStorage = () =>{
    const json = localStorage.getItem('user');

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);
    console.log(user);
    return user ?? null;
}

export async function LoginRequest (email:string, password:string){
    
    try {
        const request = await Api.post('login', {email,password})

        return request.data;
    } catch (error) {
        alert('nao deu')
        return null
    }
}