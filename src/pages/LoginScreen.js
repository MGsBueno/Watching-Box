import React from 'react';
import { 
    View,
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    ActivityIndicator,
    Alert
} from 'react-native';

import FormRow from '../components/FormRow';
import * as firebase from "firebase";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            user: '',
            password: '',
            isLoading: false,
            message:'',
        }
    }

/*Firebase login code */
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAVHiETBoRqLfj_cIK5WliCVPPjGB6IYP8",
            authDomain: "watching-box-01.firebaseapp.com",
            databaseURL: "https://watching-box-01.firebaseio.com",
            projectId: "watching-box-01",
            storageBucket: "",
            messagingSenderId: "410240569214",
            appId: "1:410240569214:web:a2826cf01aa6503358ed2f"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          
          
    }

    
    //functions render form
    onChangeHandler(field, value){
        this.setState({ 
            [field]: value 
        }); 
    }

    tryLogin(){
        this.setState({ isLoading: true, message: '' });
        const { user, password } = this.state;
        
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

    renderLoginButton (){
        if(this.isLoading){
            return <ActivityIndicator/>
        }
        return(<Button
            title = "LOGIN"
            onPress={() => this.tryLogin()}
        />);
    }

    renderSubscribeButton(){
        if(this.isLoading){
            return <ActivityIndicator/>
        }
        return(<Button
            title = "Novo por aqui? Se inscreva"
            color="#8a2be2"
            onPress={() => this.props.navigation.navigate('Subscribe')}
        />);
    }

    getMessageByErrorCode(errorCode){
        switch(errorCode){
            case 'auth/wrong-password':
                return 'Senha incorreta'
            case 'auth/user-not-found':
                return 'Usuário não encontrado'
            default:
                return 'Usuário incorreto'
        }
    
    }

    renderMessage(){
        const { message } = this.state;
        if(!message)
            return null;
        return(
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {/*user login*/}
               <FormRow first>
                    <TextInput 
                    style={styles.input}
                    placeholder = 'Usuário' 
                    value={this.state.user}
                    onChangeText={value => this.onChangeHandler('user', value)}
                    />
                    
                </FormRow>
                
                {/*user password*/}
                <FormRow last>
                    <TextInput 
                    style={styles.input}
                    placeholder = 'Senha'
                    value={this.state.password}
                    onChangeText={value => this.onChangeHandler('password', value)}
                    secureTextEntry
                    />
                </FormRow>
                { this.renderLoginButton() }
                { this.renderSubscribeButton()}
                { this.renderMessage() }
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: 10,
        paddingRight: 10,
    },
    input:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
})