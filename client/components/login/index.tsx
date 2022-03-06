import React, { useState } from "react";
import { Card } from "../card/Card";
import { CardButton } from "../button/CardButton";
import { Error } from '../notifications'
import { CardInput } from "../input/CardInput";
import {
  P1,
  Hr,
  Heading,
  A,
  TermsContainer,
  CheckDiv,
  Icons,
  Footer,
} from "../../styles/GlobalStyles";
import { CheckBoxInput } from "../input/CheckBoxInput";
import { IconDiv } from "../icons/Icons";
import { axiosSignup } from "../../axios/axios";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router';

export const LogIn = () => {
  const router = useRouter()
  const [response, setResponse] = useState<string>('')
  const [singUpStatus, setSignUpStatus] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<{
    email: string;
    password: string;
    checkbox: boolean;
  }>({
    email: "",
    password: "",
    checkbox: false,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const checkboxHangler = () => {
    setUserData({ ...userData, checkbox: !userData.checkbox });
  };
  const onSubmit = async () => {
    if (!userData.email || !userData.password) {
      setResponse("email or password not entered")
      setSignUpStatus(false)
      return
    }
    // if (!userData.checkbox) {
    //   setResponse("checkbox not checked")
    //   setSignUpStatus(false)
    //   return
    // }

    setIsLoading(true)
    try {
      const result = await axiosSignup.post<any>("/login", userData);
      console.log(result.data); 
      setResponse('Logged In!')
      setSignUpStatus(true)
      setIsLoading(false)
      localStorage.setItem('auth-token',result.data.token)
      router.push(`/user/loggedin?token=${result.data.token}`)
    } catch (error) {
      console.log(error?.response?.data);
      setResponse(error?.response?.data)
      setIsLoading(false)
      setSignUpStatus(false)
    }
  };

  const Post = async () => {
    try {
      const result = await axiosSignup.get("/post", {
        headers: { "auth-token": localStorage.getItem('auth-token') },
      });
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };



  return (
    <Card>
      <Heading>Login</Heading>
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="email"
        type="email"
        placeholder="email"
      />
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="password"
        type="password"
        placeholder="Password"
      />
      <TermsContainer>
        <CheckDiv>
          <CheckBoxInput
            checked={userData.checkbox}
            name="checkbox"
            onChange={checkboxHangler}
          />
          <P1>Remember Me</P1>
          <A>Forget Password? </A>
        </CheckDiv>
      </TermsContainer>
      {
        response &&
        <Error response={singUpStatus}>{response}</Error>

      }
      <CardButton isLoading={isLoading} onSubmit={onSubmit} type="submit" title="Log In" />
      <Hr>Or</Hr>
      <div style={{ marginTop: "1rem" }}> </div>
      <Icons>
        <IconDiv onClick={Post}>
          <Image
            src="/facebook.svg"
            alt="Picture of the author"
            width={25}
            height={25}
          />
        </IconDiv>
        <IconDiv onClick={Post}>
          <Image
            src="/instagram.svg"
            alt="Picture of the author"
            width={25}
            height={25}
          />
        </IconDiv>
        <IconDiv onClick={Post}>
          <Image
            src="/twitter.svg"
            alt="Picture of the author"
            width={25}
            height={25}
          />
        </IconDiv>
      </Icons>
      <Footer>
        <P1>
          Don&apos;t have an account?
          <Link passHref href="/home/signup">
            <A>Sign Up</A>
          </Link>
        </P1>
      </Footer>
    </Card>
  );
};

export default LogIn;
