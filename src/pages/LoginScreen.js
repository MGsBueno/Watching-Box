import React from 'react';
import { 
    View,
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    ActivityIndicator,
    Image,
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
                if (user){
                this.props.navigation.replace('Main');
            }} )
    }

    renderLoginButton (){
        if(this.state.isLoading){
            return <ActivityIndicator/>
        }
        return(<Button
            title = "LOGIN"
            color ='orange'
            onPress={() => this.tryLogin()}
        />);
    }

    renderSubscribeButton(){
        if(this.state.isLoading){
            return null
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
               <View style={styles.logoView}>
                <Image syle= {styles.logo}
                style={styles.logo}
                source={require('../images/test.png')}
                />
               </View>
               
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
                <View style = { styles.button}> 
                    { this.renderLoginButton() }
                </View>
                <View style = { styles.button}>
                    { this.renderSubscribeButton()}
                </View>
                
                { this.renderMessage() }
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    container:{
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1
    },
    input:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    button:{
        marginBottom: 10
    },
    logoView:{
        
        paddingTop:40,
        paddingLeft:85,
        alignContent:'center'
        
    },
    logo:{
        
        width: 220,
        height: 160,
        aspectRatio:1,
        resizeMode:'contain'
        
    },
})

export default connect(null, { tryLogin })(LoginPage)   