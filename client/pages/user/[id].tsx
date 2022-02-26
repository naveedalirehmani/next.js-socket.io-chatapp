import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { CardButton } from "../../components/button/CardButton";
import { axiosSignup } from "../../axios/axios.js";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

interface IProps {
  children?: string;
  userData?: { name: string; email: string };
}

export const User: FC<IProps> = ({ children, userData }) => {
  const socket = socketIOClient(ENDPOINT);
  const [user,setUser] = useState<any>('')
    useEffect(()=>{
        axiosSignup.get("/getuser", {
          headers: { "auth-token": localStorage.getItem("auth-token") },
        }).then(response=>setUser(response.data)).catch(error=>console.log(error))
    },[])
  
  const [allMessages, setAllMessages] = useState([]);
  const [render,setRender] = useState(1);
  useEffect(() => {
    socket.on('allMessages',(newMessage)=>{
      setAllMessages(newMessage)
    })
    console.log(allMessages)
    return () => {socket.disconnect()};
  }, [render]);

  const routes = useRouter();
  const { id } = routes.query;
  const logOutHandler = () => {
    localStorage.removeItem("auth-token");
    Router.push("/home/signup");
  };


  const addMessage = ()=>{
    socket.emit('addMessage',{message:'knajer',userName:user.user.userName})
    setRender(render+1)
  }

  return (
    <Background>
      <UserDiv>
        <nav>
          <div className="logo"></div>
          <div className="user">
            <CardButton
              title="Log Out"
              type=""
              onSubmit={logOutHandler}
              isLoading={false}
            />
          </div>
        </nav>
        id {id}
        <button onClick={addMessage}>lkasjdhgl</button>
        <div className="">
          {allMessages.map((message,index)=>{
            return <p key={index} style={{color:'white'}}>{message.message}</p>
          })}
          </div>
      </UserDiv>
    </Background>
  );
};

export default User;

const UserDiv = styled.div`
  /* position */

  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    /* border:1px solid red; */
  }
`;

const Background = styled.div`
  background-color: #202442;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
