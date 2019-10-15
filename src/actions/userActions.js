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
                return Alert.alert( 'Usuário ou senha inválido' )
                }  
        )
}

export const trySubscribe = ({ email,password }) => disatch =>{
    return firebase 
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(
                Alert.alert("usuário Criado com Sucesso!")
            )
            .catch(error=>{
                if (error.code === 'auth/weak-password') {
                    Alert.alert('Senha muito fraca', 'a senha precisa ter pelo menos 6 digitos');
               }
               if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Usuário existente','tente outro email');
               }
               if (error.code === 'auth/invalid-email') {
                Alert.alert('email inválido','use um formato de email válido');
               }
            })
}