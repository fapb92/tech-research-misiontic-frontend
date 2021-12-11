import { gql, useMutation } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("auth")));

    const [loginUser, { data, loading, error }] = useAuthLogin()

    const logOutUser = () => {
        setUser(null);
        setIsAuth(false)
        localStorage.clear()
    }

    useEffect(() => {
        if (loading) {
            console.log("loding...");
        }

        if (error) {
            console.log("Error", error.message);
        }

        if (data) {
            if (data.loginUser.success) {
                setUser(data.loginUser.usuario)
                setIsAuth(true)
                localStorage.setItem("user", JSON.stringify(data.loginUser.usuario));
                localStorage.setItem("auth", "true");
            } else {
                console.log(data.loginUser.message);
            }
        }
    }, [data, error, loading])

    return (
        <AuthContext.Provider value={{ user, isAuth, loginUser, logOutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthLogin = () => {
    const GET_LOGIN = gql`
    mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
            success
            message
            usuario {
            _id
            nombre
            apellido
            rol
            estado
            }
        }
    }`

    return useMutation(GET_LOGIN)

}


