import firebase from 'firebase';
import { Alert } from 'react-native';
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const USER_LOGOUT = 'USER_LOGOUT'; 


const userLoginSucess = user => ({
    type: USER_LOGIN_SUCESS,
    user
});

const userLogout = () => ({
    type: USER_LOGOUT,
});

function getMessageByErrorCode(errorCode){
    switch(errorCode){
        //Login
        case 'auth/wrong-password':
            return 'Senha incorreta'
        case 'auth/user-not-found':
            return 'Usuário não encontrado'
        //Subscribe
        case 'auth/weak-password':
            return 'Senha muito fraca', 'a senha precisa ter pelo menos 6 digitos'
        case 'auth/email-already-in-use':
            return 'Usuário existente','tente outro email'
        case 'auth/invalid-email':
            return 'email inválido','use um formato de email válido'
        //default
        default:
            return 'Usuário incorreto'
    }

}


export const tryLogin = ({email, password}) => dispatch => {
    /* firebase rules */
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user =>{
            const action= userLoginSucess(user);
            dispatch(action);  
        })

        .catch(error =>{
                return Alert.alert( getMessageByErrorCode(error.code) )
                }  
        )
}

export const trySubscribe = ({ email,password }) => disatch =>{
    return firebase 
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch(error=>{
                return Alert.alert ( getMessageByErrorCode(error.code) )
            })
}