import React from 'react';
import { 
    View,
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    ActivityIndicator,
} from 'react-native';
import firebase from '../components/configuations'
import { tryLogin } from '../actions';
import { connect } from 'react-redux';
import FormRow from '../components/FormRow';
class LoginPage extends React.Component {
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
        firebase;   
    }

    
    //functions render form
    onChangeHandler(field, value){
        this.setState({ 
            [field]: value 
        }); 
    }

    tryLogin(){
        this.setState({ isLoading: true, message: '' });
        const { user: email, password } = this.state;
        this.props.tryLogin({ email, password })
            .then( user =>{
                this.setState({ message: 'Sucesso!' })
                this.props.navigation.replace('Main');
          } )
    }

    renderLoginButton (){
        if(this.isLoading){
            return <ActivityIndicator/>
        }
        return(<Button
            title = "LOGIN"
            color ='orange'
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
                    keyboardType='email-address'
                    autoCapitalize = 'none'
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

export const styles = StyleSheet.create({
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

export default connect(null, { tryLogin })(LoginPage) 