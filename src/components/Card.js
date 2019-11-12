import React from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    Dimensions,
    Image
} from 'react-native';

const Card = ({ serie }) => (
    <View style = {styles.container}>
        <View style = {styles.card}>
            <Image style = {styles.card}
                source = {{
                    uri:serie.img
                }}
                aspectRatio={1}
                resizeMode = 'stretch'
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container:{
        margin: 2,
        width:'33%',
        height: Dimensions.get('window').width /2 
    },
    card:{
        flex: 1,
        borderWidth:1,
        height: Dimensions.get('window').width /2   
    }
});

export default Card;