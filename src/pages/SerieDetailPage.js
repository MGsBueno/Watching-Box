import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const serie = {
    "id": 1,
    "title": "Black Mirror",
    "gender": "Ficção Científica",
    "rate": 100,
    "img":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    "description":"Black Mirror é uma série de televisão britânica antológica de ficção científica criada por Charlie Brooker e centrada em temas obscuros e satíricos que examinam a sociedade moderna, particularmente a respeito das consequências imprevistas das novas tecnologias. Os episódios são trabalhos autônomos, que geralmente se passam em um presente alternativo ou em um futuro próximo."
}

class SerieDetailPage extends React.Component {
    render(){
        
        return(
            <View>
                <Image
                style={styles.image} 
                source={{
                    uri: serie.img
                }}
                />
                <Text>teste</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    image:{aspectRatio: 1}
});


export default SerieDetailPage;