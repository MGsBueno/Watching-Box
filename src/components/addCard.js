import React from 'react'
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableHighlight,
    TouchableHighlightBase,
} from 'react-native';

const  serieCard = ({ serie, onPress }) =>(
    <TouchableHighlight onPress = { onPress }
    style = { styles.container }>
        <View style = { styles.card }>
            <image source ={{
                uri:serie.img
                
            }}
            aspectRatio= {1}
            resizeMode= "stretch"
            />
            <View style = { styles.CardTitleWrapper }>
                <Text style = { styles.cardTitle}>{ serie.title}</Text>
            </View>
        </View>

    </TouchableHighlight>
)

const styles = StyleSheet.create({
    container: {
        widht: '50%',
        padding: 5,
        height: Dimensions.get(window).width/2,
    },
    card: {
        flex: 1,
        borderWidth: 1,
    }
});
export default serieCard;