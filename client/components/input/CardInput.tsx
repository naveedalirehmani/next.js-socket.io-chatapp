import React,{FC} from "react";
// import { Input } from "./StyleInput";
import styled from 'styled-components';
interface IProps {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
	margin-top: 20px;
	height: 35px;
	outline: none;
	border-radius: 15px;
	width: 15rem;
	padding-left: 20px;
	background: #242846;
	color: #7ac2a3;
	// color:white;
	border: none;
`;
export const CardInput:FC<IProps> = ({ name, placeholder,type,onChange }) => {
  return (
    <Input
    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
