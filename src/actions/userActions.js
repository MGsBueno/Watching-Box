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