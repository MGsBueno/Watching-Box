import React from 'react';
import * as firebase from "firebase";
import FormRow from '../components/FormRow';
import styles from './LoginScreen';
import { 
  View, 
  TextInput, 
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';




export default class SubscribeScreen extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        user: '',
        password: '',
        isLoading: false,
        message:'',
    }
  }

  //functions render form
  onChangeHandler(field, value){
    this.setState({ 
        [field]: value 
    }); 
  }
  renderSubscribeButton (){
    if(this.isLoading){
        return <ActivityIndicator/>
    }
    //Necessário transformar em promise o cadastro
    return(<Button
        title = "Cadastro"
        onPress={() => 
          firebase 
          .auth()
          .createUserWithEmailAndPassword(this.state.user,this.state.password)
        
        }
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
// Firebase Subscripe login
// onPress() =>
