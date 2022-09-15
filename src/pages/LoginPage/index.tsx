import React, { useState } from 'react';
import { Navigate} from 'react-router-dom';
import { ProtectedLayout } from '../../components/ProtectedLayout';
import { useAuth } from '../../contexts/useAuth';
import { LoginRequest } from '../../contexts/util';

import { 
  Container,
  Form,
  Field
} from './styles';

export const LoginPage: React.FC = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    console.log("submit", {email, password})
  };

  const Login = () => {
    const auth = useAuth();

    async function handleLogin (values:{email:string, password:string}) {
      
      try {
        await auth?.authenticate(values.email, values.password);

      } catch (error) {
        
      }
    }

  }
  /* eve.holt@reqres.in
    cityslicka
  */
  
  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu login aqui</h1>
        <Field>
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Field>
        <Field>
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Field>
        <button type="submit" onClick={Login}> Entrar </button>
      </Form>
    </Container>
  )
    
}

