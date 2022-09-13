import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LoginPage } from './LoginPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/login" element={LoginPage}/>
        </Routes>
    </Router>
  );
}

export default AppRoutes;