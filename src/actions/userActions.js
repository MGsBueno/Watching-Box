const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT'; 

const userLogin = user => ({
    type: USER_LOGIN,
    user
});

const userLout = user => ({
    type: USER_LOGOUT,
});

export const tryLogin = (user, password) => dispatch => {
    dispatch(userLogin(user));
    dispatch(userLout()); 



     /* firebase rules */
     firebase
     .auth()
     .signInWithEmailAndPassword(user, password)
     .then(user =>{
         this.setState({message: 'Sucesso!'})
         

         
     })
     .catch(error =>{
         /* allert code */
         if (error.code){
             Alert.alert(
                 '','Usuário ou senha inválido'

             )

         }

         this.setState({
             message: this.getMessageByErrorCode(error.code
         )})
         console.log('usuario invalido!', error )  
     })
     .then(() => this.setState({isLoading: false}));

}

