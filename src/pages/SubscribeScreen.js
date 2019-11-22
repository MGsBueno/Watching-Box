import React from 'react';
import FormRow from '../components/FormRow';
import styles from './LoginScreen';
import { connect } from 'react-redux';
import { trySubscribe } from '../actions';
import { 
  View, 
  TextInput, 
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
class SubscribePage extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
        user: '',
        password: '',
        isLoading: false,
        message:'',
        Loged: false,
    }
  }

  //functions render form
  onChangeHandler(field, value){
    this.setState({ 
        [field]: value 
    }); 
  }

  trySubscribe(){
    this.setState({ isLoading: true, message: '' });
    const { user: email, password } = this.state;
    this.props.trySubscribe({ email, password })
      .then( user =>{
        this.setState({ message: 'Sucesso!' })
        this.props.navigation.replace('Main');
      })
  }

  renderSubscribeButton (){
    if(this.isLoading){
        return <ActivityIndicator/>
    }
    return(<Button style = {styles.button}
        title = "Cadastro"
        color = "orange"
        onPress={() => {
        this.trySubscribe();
      
        }}
    />);
}
  render(){
    return(
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
      { this.renderSubscribeButton() }
      </View>
    )
  }
}


export default connect(null, { trySubscribe })(SubscribePage) 

