import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  div{
    display:flex;
    flex-direction:column;
    align-items: center;
    width:100%;
    margin: 0 auto;
    background-color: #C0C2C4;
    
    .title{
      display: flex;
      height: 10vh;
      flex-direction: row;
      border-bottom: 3px solid black; 
      justify-content: space-between;
      padding: 1rem;
      color: white;
      background-color: #4F83E3;
      h1{
        font-size: 30px;
        margin: 2rem 0;
      }    
      button{
        font-size:15px;
        font-weight: bold;
        width: 150px;
        height:50px;
        background-color: #4F83E3;
        color: #fff;
        border: 3px outset  #4F83E3;
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
      /* border-bottom: 3px solid black;  */
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
        border: 3px outset  #000;
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
        border: 3px outset  #000;
        cursor: pointer;
      }
    }
    .repos{
      display: flex;
      flex-direction: column;
      width: 50%;
      ul{
      display:flex;
      flex-direction: row;
      justify-content: center;
      margin: 1rem auto;
      flex-wrap: wrap;
      li{
        display: flex;
        align-items: center;
        padding: 10px ;
        border: 1px dashed #000;
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