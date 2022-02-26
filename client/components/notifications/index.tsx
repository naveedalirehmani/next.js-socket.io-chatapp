import React,{FC,useState} from 'react'
import styled,{css} from 'styled-components';

interface IProps{
    response:boolean;
    children:string;
}

export const Error:FC<IProps> = ({children,response})=>{
    return <ErrorDiv response={response}>
        {children}
    </ErrorDiv>
}

export default Error;


const ErrorDiv = styled.div`
    margin : auto 2rem;
    padding:0.5rem 1rem;
    color:red;
    font-size: 15px;
    background-color:#ff000014;
    border-radius:10px;
    ${({response}) => response === true && css`
    color:green;
    background-color:#33ff0014;
    `}
`