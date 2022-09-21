import React from 'react';
import { useNavigate } from 'react-router-dom';
import Global from '../../style/Global';
import { Container } from './style';

export const NoAcess: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/login");
    }

    return(
        <>
        <Global />
            <Container>
                <div>
                    <h1>Você não tem acesso a esta pagina.</h1>
                    <button onClick={handleClick}>Faça o Login aqui!</button>
                </div>
            </Container>
        </>
    )
  
}