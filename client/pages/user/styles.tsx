import styled from 'styled-components';
import { devices } from '../../components/mediaQureies';

export const UserDiv = styled.div`
  /* position */
  .card{
    .messages{
      height:80%;
      padding:1rem 0rem 1rem 1rem;
      overflow-y:scroll;
      
    }
    border-radius:30px;
    border:1px solid #3b3955;
    height:80vh;
    .input{
      height:10%;
      display:flex;
      justify-content:center;
      flex-direction:column;
      .inputWrapper{
        display:flex;
        justify-content:space-between;
        background-color:#31355a;
        border-radius:30px;
        margin:1rem;
        padding:0.5rem;
        /* @media ${devices.mobileXS} {
          position:absolute;
      bottom:5px;
      width:90%;
  }
    @media ${devices.mobileS} {
      position:absolute;
      bottom:5px;
      width:90%;
  }
  @media ${devices.mobileM} {
    position:initial;
    width:auto;
  } */
        .textInput{
          width:70%;
          border:none;
          background:none;
          color:#bec9eb;
          outline:none;
        }
        button{
            background:none;
            border:none;
            cursor:pointer;
          }
          .files{
            position:relative;
            width:2rem;
            span{
              position:absolute;
              width:100%;
              height:100%;
            }
            .files-input{
              cursor:pointer;
              width:2rem;
              z-index:-1;
              opacity:0;
            }
        }
        .send{
          position:relative;
          .attachment{
            position:absolute; 
            /* back */
          }
            cursor:${({inputLoaderState})=>inputLoaderState?"not-allowed":"pointer"}
        }
      }
      
    }
    .header{
      border:none;
      border-bottom:1px solid #3b3855;
      height:10%;
      width:100%;
      display:flex;
      justify-content:space-between;
      .options{
        display:flex;
        align-items:center;
        heigth:100%;
        margin-right:1rem;
        button{
            background:none;
            border:none;
            cursor:pointer;  

        }
      }
      .user{
        display:flex;
        align-items:center;
        height:100%;
        .profile-picture{
          align-items:center;
          border-radius:50%;
          width:2.5rem;
          height:2.5rem;
          overflow:hidden;
          margin:auto 1rem;
        }
        .name-status{
          color:white;
          display:flex;
          justify-content:center;
          flex-direction:column;
          p{margin:0px;padding:0px;color:#d2d2d9}
          p:nth-child(2){
            font-size:0.7rem;
          }
        }
      }
    }
    /* position:absolute; */
    @media ${devices.mobileXS} {
   width: 100vw;
    height:100vh;
  }
    @media ${devices.mobileS} {
   width: 100vw;
    height:100vh;
  }
    @media ${devices.mobileM} {
   width: 450px;
    height:90vh;
  }
    @media ${devices.mobileL} {
   width: 500px;
  }
    @media ${devices.tablet} {
   width: 800px;
  }
    @media ${devices.laptop} {
   width: 850px;
  }
  @media ${devices.desktop} {
   width: 1400px;
  }
  }
`;

export const Background = styled.div`
  background-color: #202442;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content:center;
  align-items:center;
`;