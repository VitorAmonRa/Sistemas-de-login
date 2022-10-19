import React, { useState, MouseEvent, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';
import { 
  Container,
  Form,
  Field,
  LoadingPage
} from './styles';

export const LoginPage: React.FC = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    console.log("submit", {email, password})
  };
  

  async function LoginRequest (values:{email:string, password:string}) {
      console.log('fui clicado');
      try {
        setLoading(true)
        await auth?.authenticate(values.email, values.password);
        navigate("/") 

      } catch (error) {
        setLoading(false)
        alert('Erro')
        navigate("/login")
      }
    }

    if(loading){
      return(
        <> 
          <LoadingPage>
            <h1>CARREGANDO....</h1>
          </LoadingPage>
        </>
      )
    }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu login aqui</h1>
        <p>eve.holt@reqres.in</p>
        <p>cityslicka</p>
        <Field>
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Field>
        <Field>
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Field>
        <button type='button' onClick={() => LoginRequest({email,password}) }> Entrar </button>
      </Form>
    </Container>
  )
    
}

