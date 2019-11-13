import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import Row from '../components/Row';
import LongText from '../components/LongText';

class SerieDetailPage extends React.Component {
    render(){
        const { serie } = this.props.navigation.state.params;
        return(
            <ScrollView>
                <Image
                style={styles.image} 
                source={{
                    uri: serie.img
                }}
                />
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
    }
    
});


export default SerieDetailPage;