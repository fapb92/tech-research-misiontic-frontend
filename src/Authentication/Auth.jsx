import { gql, useMutation } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
    // const user = {}
    // const isAuth = false

    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    // const [loginUser, { data, loading, error }] = useAuthLogin()


    const [loginUser, { data, loading, error }] = useAuthLogin()

    useEffect(() => {
        if (loading) {
            console.log("loding...");
            setUser({ "nombre": "namwe" })
        }

        if (error) {
            console.log("Error", error.message);
        }


        if (data) {
            console.log("entro a Auth 1");
            if (data.loginUser.success) {
                setUser(data.loginUser.usuario)
                setIsAuth(true)
                console.log("entro a Auth2");
            } else {
                console.log(data.loginUser.message);
            }
        }
    }, [data, error, loading])



    return (
        <AuthContext.Provider value={{ user, isAuth, loginUser }}>
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


