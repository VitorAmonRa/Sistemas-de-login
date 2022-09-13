import React from 'react';
import { LoginPage } from './LoginPage';
import Global from './style/Global';


export const App: React.FC = () => {
  return(
  <>
    <Global/>
    <LoginPage />
  </>
  )
}

