import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Inverters extends Component{
    render(){
        return(
            <View>
                <StatusBar style="light" />
                <Text>Inverters View</Text>
                </View>
        )
    }
}

export default Inverters;