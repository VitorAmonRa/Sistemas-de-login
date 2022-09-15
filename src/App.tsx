import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthProvider } from './contexts';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import Global from './style/Global';

function App (){

  return(
    <>
    <Global/>
    <AuthProvider>
      <Router>
          <Routes>
              <Route path="login" element={ <LoginPage/> }/>
              <Route path='*' element={<h1>Not Found</h1>} />
              <Route path='/' element={
                <ProtectedLayout>
                  <HomePage/>
                </ProtectedLayout>
                }/>
          </Routes>
      </Router>
    </AuthProvider>
    </>
  )
}
 export default App;
