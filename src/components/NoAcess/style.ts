import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #4F83E3;
  div{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    width:100%;
    height: 400px;
    margin: 0 auto;
    word-break: break-all;
    border-radius: 10px;
    background-color: #C0C2C4;
    border: 5px solid  #131313;
    h1{
      padding: 10px 0 ;
    }    
    button{
      font-size:20px;
      font-weight: bold;
      margin: 20px;
      width: 50%;
      height:50px;
      background-color: #fff;
      border: 3px outset  #232C33;
      cursor: pointer;
      :hover{
        background-color: #4F83E3;
        color: #fff;
        border: 3px outset  #131313

      }
    }
  }
  
`;
