import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Authentication/Auth';
import { NavBar } from '../NavBar/NavBar';

export const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    let location = useLocation();

    if (!auth.isAuth) {
        return <Navigate to="/signin" state={{ from: location }} />;
    }

    return <>
        <NavBar />
        {children}
    </>
}

