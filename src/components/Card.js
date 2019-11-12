import React from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const Card = ({ serie, onNavigate }) => (
    <TouchableOpacity 
    onPress={onNavigate}
    style = {styles.container}>
        <View style = {styles.card}>
            <Image style = {styles.card}
                source = {{
                    uri:serie.img
                }}
                aspectRatio={1}
                resizeMode = 'stretch'
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container:{
        margin: 2,
        height: Dimensions.get('window').width /3 
    },
    card:{
        flex: 1,
        borderWidth:2
           
    }
});

export default Card;