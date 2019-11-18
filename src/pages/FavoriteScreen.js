import React from 'react'
import { StyleSheet, View, Text, flatList } from 'react-native';
import Series from '../Series.json';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card'


const SeriesPage = props => (
    <View style = {styles.container}>
        <FlatList
            data = { Series }
            renderItem={({ item, index }) => (
            <View>
                <Card serie ={item} 
                onNavigate = {() => props.navigation.navigate('SerieDetail', { serie: item })}
                />
            </View>
            )}
            keyExtractor = {item => item.id.toString()}
            numColumns = {3}
            
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
