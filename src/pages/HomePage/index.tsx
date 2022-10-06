import React, { useCallback, useEffect, useState } from 'react';
import Global from '../../style/Global';
import { useAuth } from '../../contexts/useAuth';

import { 
  Container,
} from './style';
import { githubApi } from '../../services/githubApi';

interface Repository {
  full_name: string;
  name: string;
  description: string;
}

export const HomePage: React.FC = () => {

  const auth = useAuth();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [userRepo, setUserRepo] = useState('')
  const urlRepo = `users/${userRepo}/repos`;
  

    const loadData = async () => {
      const response = await githubApi.get(urlRepo)
        setRepositories(response.data);
    }

/*   useEffect(() => {
     githubApi.get(urlRepo)
     .then(response =>{
       setRepositories(response.data);
     })
  },[]) */

  const handleSearch = () => {
    loadData()
    console.log("Clicou")
  }
/*     useEffect(() => {
    },[handleSearch]) */
  

  const handleClear = () => {
    setUserRepo("")
    setRepositories([])
    console.log("Limpei")
  
  }
  
  const Logout = () => {
    auth?.logout()
  };
  

  return(
    <>
    <Global />
        <Container>
            <div>
              <div className='title'> 
                  <h1>Bem vindo a Home Page.</h1>
                  <button type='button' onClick={() => Logout()}> Logout</button>
              </div>
              <div className='search-title'>
                <h1>Github Repositorios</h1>
              </div>
              <div className="search">
                <h1>Procure o usuario aqui!</h1>
                <input 
                type="text" 
                name='searchUser'
                placeholder='Procure o Usuario Aqui'
                value={userRepo}
                onChange={(e) => setUserRepo(e.target.value)}
                />
                <button 
                type='button' 
                name='search'
                onClick={() => handleSearch()}
                >
                   Procurar 
                </button>
                <button
                type='button'
                name='clear'
                onClick={() => handleClear()}
                >
                  Limpar
                </button>
              </div>
              { repositories.length > 0 ? (
                <ul>
                  {repositories.map(repo => {
                    return (
                      <li key={repo.full_name}>
                      <h1> 
                        {repo.full_name.substring(0, repo.full_name.indexOf('/'))} 
                      </h1>
                      <p> - {repo.name} </p>
                      </li>
                      )
                    })}
                  </ul> 
              ) : (
                <div className='empty-search'>
                  <p> Sem repositorios encontrados!</p>
                </div>
              )}
               
            </div>
        </Container>
    </>
  );
}


