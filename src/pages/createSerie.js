import React from 'react';
import { 
    StyleSheet,
    View, 
    TextInput, 
    Slider, 
    Text, 
    Button, 
    ActivityIndicator,
    Alert,
} from 'react-native';
import FormRow from '../components/FormRow';
import { setField, saveSerie, setWholeSerie, resetForm } from '../actions';
import { connect } from 'react-redux';


class serieFormPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount(){
        const  { navigation, setWholeSerie, resetForm} = this.props;
        const { params } = navigation.state;
        if (params && params.serieToEdit){
             return setWholeSerie(params.serieToEdit);
        } return resetForm();
        }
    

    renderButton(){
        if(this.state.isLoading) 
            return <ActivityIndicator/>
        
        return (
        <Button
        title= 'salvar'
        color = 'grey'
        onPress = {async () => {
            this.setState({isLoading: true})
            try{
                const { saveSerie,createSerie, navigation } = this.props;
                await saveSerie(createSerie)
                navigation.goBack();
            }catch(error){
                Alert.alert('Erro!', 'Problema em conectar ao banco de dados, tente depois')
                
            }finally{
                this.setState({isLoading: false})   
            }
        }}/>
        )
    }
    
    render(){
        const {createSerie,
            setField, 
            } = this.props;
        
        return(
            <View>
                <FormRow first > 
                    <TextInput
                    style ={ styles.input }
                    placeholder='título'
                    value= { createSerie.title }
                    onChangeText={value => setField('title', value) }
                    />
                </FormRow>
                <FormRow > 
                    <TextInput
                    style ={ styles.input }
                    placeholder='URL imagem'
                    value= { createSerie.img }
                    onChangeText={value => setField('img', value) }
                    />
                </FormRow>
                <FormRow>
                    <View style = { styles.rate }>
                        <Text style = {styles.space}>Nota:</Text>
                        <Text>{ createSerie.rate }</Text>    
                    </View>

                    <Slider
                    onValueChange = {value => setField('rate', value)}
                    maximumValue = {10.0}
                    step ={0.5}
                    />
                </FormRow>
                <FormRow  > 
                    <TextInput
                    style ={ styles.input }
                    placeholder='Gênero'
                    value= { createSerie.gender }
                    onChangeText={value => setField('gender', value) }
                    numberOfLines = {2}
                    multiline = {true}
                    />
                </FormRow>
                <FormRow last > 
                    <TextInput
                    style ={ styles.input }
                    placeholder='Descrição'
                    value= { createSerie.description }
                    onChangeText={value => setField('description', value) }
                    numberOfLines = {6}
                    multiline = {true}
                    />
                </FormRow>
                { this.renderButton() }
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    input:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    rate: {
        flexDirection:'row',
        justifyContent:'flex-start',      
    },
    space: {
        paddingHorizontal: 10
    },
});
function mapStateToProps(state){
    return {
        createSerie: state.createSerie
    }
}
mapDispatchtoProps = {
    setField,
    saveSerie,
    setWholeSerie,
    resetForm,
    
}
export default connect(mapStateToProps, mapDispatchtoProps)(serieFormPage); 