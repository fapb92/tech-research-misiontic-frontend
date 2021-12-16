import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Authentication/Auth';

export const PublicRoute = ({ children }) => {
    const auth = useAuth();
    let location = useLocation();

    if (auth.isAuth) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children


}

