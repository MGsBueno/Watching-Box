import React from 'react';
import { 
    ScrollView, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableHighlight, 
    View, 
    Alert,
    Button,
 } from 'react-native';
import Row from '../components/Row';
import LongText from '../components/LongText';
import { setField, saveSerie } from '../actions';
import { connect } from 'react-redux'; 

class SerieDetailPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            FavoritedMsg: 'ADD Favoritos',
    }}
   
    


    changeState = /* TODA A LOGICA DE ADD SERIE AO FAVORITOS AQUI */
    () => {
        
        if(this.state.FavoritedMsg =='ADD Favoritos'){
                const { navigation } = this.props;
                const { serie } = this.props.navigation.state.params;
                navigation.navigate('createSerie', { serieToEdit: serie})
                this.setState({FavoritedMsg : 'Favorito'});
        }
        else{
            this.setState({ FavoritedMsg : 'ADD Favoritos' });
        }
    }   

    render(){
        
        const { serie } = this.props.navigation.state.params;
        return(
                <ScrollView>
                {
                    serie.img
                    ?   <Image
                    style={styles.image} 
                    source={{
                        uri: serie.img
                    }}
                    />
                    : null
                }
                
                <TouchableHighlight onPress={ this.changeState }>
                    <View style={
                        this.state.FavoritedMsg=== 'ADD Favoritos'
                        ? styles.buttonO : styles.buttonP}>
                <Text style={styles.buttonText}>{ this.state.FavoritedMsg }</Text>
                    </View>
                </TouchableHighlight>
          
                    
                    <Row label='Título' content ={serie.title}/>
                    <Row label='Gênero' content ={serie.gender}/>
                    <Row label='Nota' content ={serie.rate}/>
                    <LongText label='Descrição' content ={serie.description}/>
                    
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        aspectRatio: 1.2,
    },
    
    container: {
        alignItems: 'center'
        },
        buttonO: {
        alignItems: 'center',
        backgroundColor: 'orange',
        height: 30
        },
        buttonP: {
            alignItems: 'center',
            backgroundColor: 'purple',
            height: 30
            },
        buttonText: {
        textAlign: 'center',
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }   
});

export default SerieDetailPage;