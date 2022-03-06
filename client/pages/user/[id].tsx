import React, { FC, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { axiosSignup } from "../../axios/axios.js";
import socketIOClient from "socket.io-client";
import Image from 'next/image'
import { Background, UserDiv } from './styles';
import { Icon } from '@iconify/react';
import { MessageDiv } from '../../components/messageDiv';
// import { data } from '../../components/data';
import Loader from '../../components/spinner'
// import Picker from 'emoji-picker-react'

const ENDPOINT = "http://localhost:4000";

interface IProps {
  children?: string;
  userData?: { name: string; email: string };
}
interface IUsers {
  user: {
    _id: string;
    userName: string;
    email: string;
    password: string;
    date: string;
    __v: number;
  }
}
interface IAllMessages {
  date: string;
  message: string;
  userName: string;
  __v: number;
  picture:string;
  _id: string;
}[]

export const User: FC<IProps> = ({ children, userData }) => {
  const [inputLoaderState, setInputLoaderState] = useState<boolean>(false)
  const routes = useRouter();
  const { id } = routes.query;
  const socket = socketIOClient(ENDPOINT);
  const [user, setUser] = useState<IUsers>()
  useEffect(() => {
    axiosSignup.get("/getuser", {
      headers: { "auth-token": localStorage.getItem("auth-token") },
    }).then(response => setUser(response.data)).catch(error => console.log(error))
  }, [])
  
  const [allMessages, setAllMessages] = useState<any>([]);
  console.log(allMessages)
  const [render, setRender] = useState<number>(1);
  useEffect(() => {
    socket.on('allMessages', (newMessage) => {
      setInputLoaderState(false)
      setAllMessages(newMessage)
    })
    return () => { socket.disconnect() };
  }, [render]);
  useEffect(() => {
    
    socket.on('messageAdded', (data) => {
      console.log('new message recieved')
      // if (!data || !allMessages.length || allMessages == undefined) return
      console.log('message added')
      setAllMessages([...allMessages, data])
      setInputLoaderState(false)
    })
  }, [])


  // useEffect(() => {
  //   const data = []
  //   for (let i = 0; i < (allMessages.length - 1); i++) {
  //     if (allMessages[i]?.userName === allMessages[i + 1]?.userName) {
  //       allMessages[i].margin = true
  //       data.push(allMessages[i])
  //     }
  //     else {
  //       allMessages[i].margin = false
  //       data.push(allMessages[i])
  //     }
  //   }
  //   setAllMessages(data)
  // }, [])

  const logOutHandler = () => {
    localStorage.removeItem("auth-token");
    Router.push("/home/signup");
  };


  const [inputData, setInputData] = useState<any>()
  const addMessage = () => {
    setInputLoaderState(true)
    console.log('sent messages')
    socket.emit('addMessage', { message: inputData, userName: user.user.userName, picture:attachment||"false" })
    setInputData('')
    setRender(render + 1)
  }

  const onEmojiClick = (event,emojiObject)=>{
    console.log(emojiObject)
  }

  // TAKING FILES 
  const [attachment,setAttachment] = useState<string>('');

  const pictureHandler=(event)=>{
    console.log(event.target.files[0])
    const file = event.target.files[0];
      base64(file)
        .then((result:string) => {
          setAttachment(result)        
        })
        .catch((error) => {
          console.log(error);
        });
    }
  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Background>
      <UserDiv inputLoaderState={inputLoaderState}>

        <div className="card">
          <div className="header">
            <div className="user">
              <div className="profile-picture">
                <Image src="/me.png"
                  alt="Picture of the author"
                  width={50}
                  height={50}></Image>
              </div>
              <div className="name-status">
                <p>{user?.user?.userName}</p>
                <p>last seen today at 17:30</p>
              </div>

            </div>
            <div className="options">
              <button><Icon icon="fluent:emoji-laugh-24-regular" color="#676091" width="20" height="20" /></button>
              <button><Icon icon="fluent:emoji-laugh-24-regular" color="#676091" width="20" height="20" /></button>
              <button><Icon icon="fluent:emoji-laugh-24-regular" color="#676091" width="20" height="20" /></button>
            </div>
          </div>
          <div className="messages">
            {allMessages?.map(({ userName, message,picture }, index) => {
              return <MessageDiv key={index} picture={picture} side={user?.user?.userName == userName} text={message} userName={userName}></MessageDiv>
            })}
          </div>
          <div className="input">
            
            <div className="inputWrapper">
              <button className="files">
              <span>
            <Icon icon="ant-design:paper-clip-outlined" color="#676091" width="20" height="20" />
              </span>
              <input type="file" className="files-input" onClick={(e)=>pictureHandler(e)}/>
              </button>
              <button className="emoji"><Icon icon="fluent:emoji-laugh-24-regular" color="#676091" width="20" height="20" />
              {/* <Picker onEmojiClick={onEmojiClick} preload={false}/> */}
              </button>
              <input className="textInput" value={inputData} type="text" placeholder="write a message..." onChange={(e) => setInputData(e.target.value)} />
              <button className="mic"><Icon icon="bi:mic-fill" color="#676091" width="20" height="20" /></button>
              <button className="send" onClick={addMessage}>
              {/* <div className="attachment"><Icon icon="ph:files"/></div> */}
                {inputLoaderState ? <Loader></Loader> : <Image src="/send.png"
                alt="Picture of the author"
                width={20}
                height={20}></Image>}</button>
            </div>
          </div>

        </div>
      </UserDiv>
    </Background>
  );
};

export default User;





export const getServerSideProps = async (context) => {

  // const data = await axiosSignup.get("/getuser", {
  //   headers: { "auth-token": localStorage.getItem("auth-token") },
  // })
  // console.log(data)
  return {
    props: {}
  }

}

// export async function getStaticProps({ params }) {
//   return {
//     props: { name: "data" },
//   };
// }

// export async function getStaticPaths() {
//   const data = ["login", "signup"];

//   const paths = data.map((routes) => {
//     return {
//       params: {
//         id: routes,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
