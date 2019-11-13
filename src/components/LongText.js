import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback  } from 'react-native';

export default class LongText extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isExpanded: false
        }
    }

    toggleIsExpanded() {
        const { isExpanded } = this.state;
        this.setState({
            isExpanded : !isExpanded
        });
    }

    render(){
        const { label = '', content = '-'} = this.props;
        const { isExpanded } = this.state;
        return( 
            <View style = {styles.row}>
                <Text style = {[
                    styles.cell,
                    styles.label,
                ]}>{ label }</Text>
                <TouchableWithoutFeedback onPress ={()=> this.toggleIsExpanded()}>
                    <Text style ={[
                        styles.cell,
                        styles.content,
                        isExpanded ? styles.expanded : styles.collapsed
                        ]}> { content }
                    </Text>
                </TouchableWithoutFeedback>
                
            </View>
            );
    }
} 

({label = '', content = '-'}) => {
    
}

const styles = StyleSheet.create({
    row: {
        paddingTop: 3,
        paddingBottom: 3,
        
    },
    cell:{
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5,
    },
    label:{
        paddingBottom : 8,
        fontWeight: 'bold',
    },
    content:{
        flex: 3,
    },
    collapsed:{
        maxHeight:65,
    },
    expanded:{
        flex:1,
    }
});
