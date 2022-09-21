import React from 'react';
import Global from '../../style/Global';
import { useAuth } from '../../contexts/useAuth';

import { Container } from './style';

export const HomePage: React.FC = () => {
   const auth = useAuth();

  const Logout = () => {
    auth?.logout()
  };
  return(
    <>
    <Global />
        <Container>
            <div>
                <h1>Bem vindo a Home Page.</h1>
                <button type='button' onClick={() => Logout()}> Clique para sair!</button>
            </div>
        </Container>
    </>
  );
}

