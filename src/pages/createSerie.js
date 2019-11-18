import React from 'react';
import { StyleSheet, View, TextInput, Slider, Text, Button } from 'react-native';
import FormRow from '../components/FormRow';
import { setField } from '../actions';
import { connect } from 'react-redux';


const serieFormPage = ({ serieForm, setField }) => (
    <View>
        <FormRow first > 
            <TextInput
            style ={ styles.input }
            placeholder='título'
            value= { serieForm.title }
            onChangeText={value => setField('title', value) }
            />
        </FormRow>

        <FormRow first > 
            <TextInput
            style ={ styles.input }
            placeholder='URL imagem'
            value= { serieForm.img }
            onChangeText={value => setField('img', value) }
            />
        </FormRow>

        <FormRow>
            <View style = { styles.rate }>
                <Text>Nota:</Text>
                <Text>{ serieForm.rate }</Text>    
            </View>
            
            <Slider
            onValueChange = {value => setField('rate', value)}
            maximumValue = {10.0}
            step ={0.5}
            />
        </FormRow>

        <FormRow last > 
            <TextInput
            style ={ styles.input }
            placeholder='Descrição'
            value= { serieForm.description }
            onChangeText={value => setField('description', value) }
            numberOfLines = {6}
            multiline = {true}
            />
        </FormRow>

        <Button
        title= 'salvar'
        color = 'grey'/>
    </View>
);

const styles = StyleSheet.create({
    input:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    rate: {
        flexDirection:'row',
        justifyContent:'space-between'
    }
});
function mapStateToProps(state){
    return {
        serieForm: state
    }
}

mapDispatchtoProps = {
    setField
}


export default connect(mapStateToProps, mapDispatchtoProps)(serieFormPage); 