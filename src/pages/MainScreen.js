import React from 'react';
import { StyleSheet, View, Button, Dimensions, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import { SearchBar } from 'react-native-elements';
import  {connect } from 'react-redux';
import { watchSeries } from '../actions';
class SeriesPage extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                search: '',
                
            }}
        
    
    
    componentDidMount(){
        this.props.watchSeries();
    }


    

    render(){
        const { navigation, series } = this.props;
        const { search } = this.state;       
            return(
                <View style = {styles.container}>
                     <SearchBar buttonContainer = {styles.favoritos}
                        placeholder="Pesquisa"
                        onChangeText={ search => this.setState({search})}
                        value={search}
                    />        
                    
                    {/*Botões */}
                    <View style = {styles.buttonContainer}>
                        <Button 
                            onPress={() => navigation.navigate('createSerie')}
                            title='ADD Série'
                            color="grey"
                        />
                        <Button 
                            onPress={() => {if(series)
                                navigation.navigate('Favorite')}}
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
        justifyContent:'space-between'
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
    
    if( series === null )
        return { series }

    const keys = Object.keys(series);
    const serieWithKeys = keys.map(id => {  
        return { ...series[id], id }
    }) 
    return { series: serieWithKeys };
}

export default connect (mapStatToProp, { watchSeries })(SeriesPage);