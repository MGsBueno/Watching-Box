import React from 'react';

import { StyleSheet, View, Button, Dimensions, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { SearchBar } from 'react-native-elements';
import  {connect } from 'react-redux';
import { watchSeries } from '../actions/';
class SeriesPage extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                search: '',
            }}

    updateSearch = search => {
        this.setState({ search: search });
        };
    
    componentDidMount(){
        this.props.watchSeries();
    }

    render(){
        const { series, navigation, search } = this.props;
        if (!series){
            return <ActivityIndicator/>
        }
        return(
        <View style = {styles.container}>
             <SearchBar buttonContainer = {styles.favoritos}
                     placeholder="Pesquisa"
                    onChangeText={this.updateSearch}
                    value={search}
                    />
                
            <FlatList 
                data = {[...series ]}
                renderItem={({ item, index }) => (
                <View>
                    <Card serie ={item} 
                    onNavigate = {() => navigation.navigate('SerieDetail', { serie: item })}
                    />
                </View>
                )}
                keyExtractor = {item => item.id.toString()}
                numColumns = {3}
            />
            {/*Botões */}
            
            <View style = {styles.buttonContainer}>
                    <Button 
                        onPress={() => navigation.navigate('createSerie')}
                        title='ADD Série'
                        color="grey"
                    />
                    <Button 
                        onPress={() => navigation.navigate('Favorite')}
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

const mapStatToProp = state =>{
    const { series } = state;
    
    if( !series )
        return { series}

    const keys = Object.keys(series);
    const serieWithKeys = keys.map(id => {  
        return { ...series[id], id }
    }) 
    return { series: serieWithKeys };
}

export default connect (mapStatToProp, { watchSeries })(SeriesPage);