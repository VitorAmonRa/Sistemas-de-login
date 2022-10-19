import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #232C33;
  div{
    display:flex;
    flex-direction:column;
    align-items: center;
    width:100%;
    margin: 0 auto;
    background-color: #DADFF7;
    
    .title{
      display: flex;
      height: 10vh;
      flex-direction: row;
      border-bottom: 3px solid black; 
      justify-content: space-between;
      padding: 1rem;
      color: white;
      background-color: #232C33;
      h1{
        font-size: 30px;
        margin: 2rem 0;
      }    
      button{
        font-size:15px;
        font-weight: bold;
        width: 150px;
        height:50px;
        background-color: #232C33;
        color: #fff;
        border: 3px outset  #232C33;
        cursor: pointer;
        .icon{
          font-size: 30px;
        }
      }
    }
    .search-title{
      display:flex;
      flex-direction:column;
      justify-content:center;
      height: 50px;
      padding: 2rem;
      h1{
        font-size: 30px;
      }
    }
    .search{
      display: flex;
      flex-direction:row;
      align-items: center;
      justify-content: center;
      height: 10vh;
      border: none;
      border-bottom: 3px solid black; 
      h1{
        font-size: 20px
      }
      input{
        margin: 2rem;
        font-size:18px;
        padding: 10px;
        width: 350px;
        height:40px;
        background-color: #fff;
        border: 3px outset  #232C33;
        ::placeholder{
          font-size: 18px;
          padding: 5px;
        }
      }
      button{
        font-size:15px;
        font-weight: bold;
        margin: 5px;
        width: 80px;
        height:50px;
        background-color: #fff;
        border: 3px outset  #232C33;
        cursor: pointer;
      }
    }
    ul{
      display:flex;
      flex-direction: column;
      justify-content: center;
      width:50%;
      
      align-items: center;
      margin: 1rem auto;
      li{
        display: flex;
        align-items: center;
        padding: 10px ;
        border: 2px solid #232C33;
        text-decoration: none;
        list-style: none;
        width:51%;
        font-size: 18px;
        h1{
          padding: 0 4px;
          font-size: 22px;
          text-align: center;
        }
        p{
          text-align: center;
          font-size: 18px;
        }
      }
    }
    .empty-search{
      display:flex;
      align-items: center;
      margin-top: 50px;
      height:100vh;
      p{
        text-align: center;
        font-size: 20px;
      }
    }
}`