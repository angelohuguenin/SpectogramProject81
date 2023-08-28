//Ângelo Augusto; Last Update: 26/08/2023, 11:49am.
//Profile

import React,{ Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> Profile </Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    }
})