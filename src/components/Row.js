import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const Row = ({label = '', content = '-'}) => {
    return( 
    <View style = {styles.row}>
        <Text style = {[
            styles.cell,
            styles.label,
            styles.lenght > 8 ? styles.longLabel : null
        ]}>{ label }</Text>
        <Text style ={[styles.cell,styles.content]}> { content }</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection : 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5',
    },
    cell:{
        fontSize: 18,
        paddingLeft: 5,
    },
    longLabel: {
        fontSize: 12,
    },
    label:{
        fontWeight: 'bold'
    }
});

export default Row;