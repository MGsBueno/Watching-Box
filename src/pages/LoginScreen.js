import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            user: '',
            password: '',
        }
    }
    
    //function render form
    onChangeHandler(field, value){
        this.setState({ 
            [field]: value 
        });
    }

    tryLogin(){
        console.log(this.state);
    }



    render() {
        return (
            <View style={styles.container}>
                {/*user login*/}
               <FormRow first>
                    <TextInput 
                    style={styles.input}
                    placeholder = 'User' 
                    value={this.state.user}
                    onChangeText={value => this.onChangeHandler('user', value)}
                    />
                    
                </FormRow>
                
                {/*user password*/}
                <FormRow last>
                    <TextInput 
                    style={styles.input}
                    placeholder = 'Password'
                    value={this.state.password}
                    onChangeText={value => this.onChangeHandler('password', value)}
                    secureTextEntry
                    />
                </FormRow>
                <Button title = "LOGIN"
                onPress={() => this.tryLogin()}
                />
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