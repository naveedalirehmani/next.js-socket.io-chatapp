import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Card } from "../../components/card/Card";

interface IProps {
    children: string;
    userData: { name: string, email: string }
}

export const User:FC<IProps> = ({ children, userData }) => {
    return (
    <Card>
        <UserDiv>
            user
        </UserDiv>
    </Card>
    )
}

export default User;

const UserDiv = styled.div`

`