import React from 'react';

import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import Series from '../Series.json';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { SearchBar } from 'react-native-elements';
import { setField } from '../actions';

// import sideBar from './components/sideBar'


export default class SeriesPage extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                search: '',
            }}

    updateSearch = search => {
        this.setState({ search });
        value => setField( 'title',value);
        };

    render(){
        const { search } = this.state;
            
        return(
        <View style = {styles.container}>
             <SearchBar buttonContainer = {styles.favoritos}
                     placeholder="Pesquisa"
                    onChangeText={this.updateSearch}
                    value={search}
                    />
                
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
            {/*Botões */}
            
            <View style = {styles.buttonContainer}>
                    <Button 
                        onPress={() => this.props.navigation.navigate('createSerie')}
                        title='ADD Série'
                        color="grey"
                    />
                    <Button 
                        onPress={() => this.props.navigation.navigate('Favorite')}
                        title='Favoritos'
                        color="grey"
                    />
                </View>
        </View>
            )}
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
    },  
    buttonContainer: {
        flexDirection: 'row',
        alignItems:'stretch',
        justifyContent:'space-between',
    },
    search:{
        width: Dimensions.get('window').width *2/3, 
    }
})