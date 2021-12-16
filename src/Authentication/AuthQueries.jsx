import { gql, useMutation } from "@apollo/client"


export const useAuthLogin = () => {
    const GET_LOGIN = gql`
   mutation LoginUser($password: String!, $email: String!) {
        loginUser(password: $password, email: $email) {
            success
            message
            usuario {
                _id
                nombre
                apellido
                rol
                estado
            }
            token
        }
    }`

    return useMutation(GET_LOGIN)

}

export const useAuthToken = () => {
    const GET_VERIFY_TOKEN = gql`
   mutation VerificarToken($token: String!) {
        verificarToken(token: $token) {
        success
        message
        usuario {
            _id
            nombre
            apellido
            rol
            estado
        }
        token
        }
    }`

    return useMutation(GET_VERIFY_TOKEN)

}

export const useAuthRegistro = () => {
    const SET_NUEVO_USUARIO = gql`
    mutation CrearUsuario($identificacion: String!, $nombre: String!, $apellido: String!, $email: String!, $password: String!, $rol: Enum_Rol!) {
        crearUsuario(identificacion: $identificacion, nombre: $nombre, apellido: $apellido, email: $email, password: $password, rol: $rol) {
        success
        message
        usuario {
            _id
            nombre
            apellido
            rol
            estado
        }
        token
        }
    }`
    return useMutation(SET_NUEVO_USUARIO)
}