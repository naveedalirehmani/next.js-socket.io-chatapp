import React, { useState, useEffect, FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { devices } from '../../components/mediaQureies'

interface IProps {
    text: string;
    userName: string;
    side: boolean;
    picture?: string;
}

export const MessageDiv: FC<IProps> = ({ text, userName, side, picture }) => {

    // const [margin,setMargin] = useState<boolean>(false)
    // useEffect(()=>{
    //     const messageDiv = document.querySelectorAll(".messageDiv")
    //     let result = false;
    //     for(let i = 0; i<messageDiv.length;i++){
    //         if(messageDiv[i]?.id == messageDiv[i+1]?.id) result = true;
    //         if(i+1 == messageDiv.length) return
    //     }
    //     console.log('here')
    //     console.log(result,"resultasdf")
    //     setMargin(result)
    // },[])

    return <>
        <Main side={side} id={userName} className="messageDiv" >
            {side ? <div className="side">
                <div className="text">
                    {!(picture=="false") && <div className="picture">
                        <Image src={"/"+picture}
                            alt="Picture of the author"
                            width={100}
                            height={100}></Image>
                    </div>}
                    <div className="content">{text}</div>
                    <div className="time">10:100 AM</div>
                </div>
                <div className="user">
                    <div className="image">
                        <Image src="/me.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}></Image>

                    </div>
                </div>

            </div> : <div className="side">
                <div className="user">
                    <div className="image">
                        <Image src="/me.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}></Image>

                    </div>
                </div>
                <div className="text">
                    {!(picture=="false") && <div className="picture">
                        <Image src={"/"+picture}
                            alt="Picture of the author"
                            width={100}
                            height={100}></Image>
                    </div>}
                    <div className="content">{text}</div>
                    <div className="time">10:20 AM</div>
                </div>

            </div>}
        </Main>
    </>
}


const Main = styled.div`
    margin-left:auto;
    margin-top:${({ margin }) => margin ? '0.2rem' : "0.5rem"};
    display:flex;
    justify-content:${({ side }) => side ? 'flex-end' : "start"};
    .side{
        width:70%;
        @media ${devices.mobileXS}{
            width:90%;
        }
        @media ${devices.mobileS}{
            width:90%;
        }
        @media ${devices.mobileM}{
            width:70%;
        }
        display:flex;
        justify-content:${({ side }) => side ? 'flex-end' : "start"};
        .text{
            background-color:${({ side }) => side ? '#406ae0' : "#25294a"};
            padding:0.5rem 0.7rem;
            border-radius: ${({ side }) => side ? "15px 15px 0px 15px" : "15px 15px 15px 0px"};
            /* border-radius:20px; */
            color:#bec9eb;
            margin:auto 0.5rem;
            font-size:0.8rem;
            .time{
                margin-top:0.2rem;
                font-size:0.6rem;
                text-align:right;
            }
        }
        .user{
            display:flex;
            align-items:end;
            justify-content:center;
            .image{
                height:2rem;
                width:2rem;
                border-radius:45%;
                overflow:hidden;
                display:flex;
            }
    }
    }
`