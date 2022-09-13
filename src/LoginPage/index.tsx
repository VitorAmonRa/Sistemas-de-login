import React, { useState } from 'react';
import '../interface';
import { User } from '../interface';

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
        <button type="submit"> Entrar </button>
      </Form>
    </Container>
  )
    
}

