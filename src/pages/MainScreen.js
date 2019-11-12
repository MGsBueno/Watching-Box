import React from 'react';
import { StyleSheet, View, Text, flatList } from 'react-native';
import Series from '../Series.json';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card'

const SeriesPage = props => (
    <View style = {styles.container}>
        <FlatList
            data = { Series }
            renderItem={({ item }) => (
            <View>
                <Card serie ={item} />
            </View>
            )}
            keyExtractor = {item => item.id.toString()}
            numColumns = {2}
        />
    </View>
);
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#181818'
    },
})


export default SeriesPage; 