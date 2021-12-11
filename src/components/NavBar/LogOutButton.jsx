import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Authentication/Auth';

export const LogOutButton = ({ children, ...params }) => {
    const { logOutUser } = useAuth()
    const navigate = useNavigate()


    const handleLogOut = (e) => {
        e.preventDefault();
        logOutUser()
        navigate("/");
    }

    return (
        <button {...params} onClick={(e) => handleLogOut(e)}>{children}</button>
    )
}
