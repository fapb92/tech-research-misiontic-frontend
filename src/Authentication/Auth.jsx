import { createContext, useContext, useEffect, useState } from "react";
import { useAuthLogin, useAuthToken, useAuthRegistro } from "./AuthQueries";

export const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loginUser, loginRes] = useAuthLogin()
    const [VerificarToken, tokenRes] = useAuthToken()
    const [crearUsuario, newUserRes] = useAuthRegistro()


    const logOutUser = () => {
        localStorage.clear()
        setUser(null);
        setIsAuth(false)
        setToken(null)
    }


    if (token && !user) {

        VerificarToken({ variables: { token } })


        if (tokenRes.loading) {
            console.log("loding...");
        }

        if (tokenRes.error) {
            console.log("Error", tokenRes.error.message);
        }

        if (tokenRes.data) {
            if (tokenRes.data.verificarToken.success) {
                setUser(tokenRes.data.verificarToken.usuario)
                setIsAuth(true)
                setToken(tokenRes.data.verificarToken.token)
                localStorage.setItem("token", tokenRes.data.verificarToken.token);
            } else {
                localStorage.clear()
                console.log(tokenRes.data.verificarToken.message);
            }
        }
    }

    useEffect(() => {

        if (loginRes.loading || newUserRes.loading) {
            console.log("loding...");
        }

        if (loginRes.error || newUserRes.error) {
            loginRes.error ? console.log("Error", loginRes.error.message) : console.log("Error", newUserRes.error.message)
        }

        if (loginRes.data) {
            if (loginRes.data.loginUser.success) {
                setUser(loginRes.data.loginUser.usuario)
                setIsAuth(true)
                setToken(loginRes.data.loginUser.token)
                localStorage.setItem("token", loginRes.data.loginUser.token);
            } else {
                console.log(loginRes.data.loginUser.message);
            }
        }

        if (newUserRes.data) {
            if (newUserRes.data.crearUsuario.success) {
                setUser(newUserRes.data.crearUsuario.usuario)
                setIsAuth(true)
                setToken(newUserRes.data.crearUsuario.token)
                localStorage.setItem("token", newUserRes.data.crearUsuario.token);
            } else {
                console.log(newUserRes.data.crearUsuario.message);
            }
        }

    }, [loginRes.data, loginRes.error, loginRes.loading, newUserRes.data, newUserRes.error, newUserRes.loading])
    return (
        <AuthContext.Provider value={{ user, isAuth, loginUser, logOutUser, crearUsuario }}>
            {children}
        </AuthContext.Provider>
    )
}

