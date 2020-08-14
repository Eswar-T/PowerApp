import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Sld extends Component{
    render(){
        return(
            <View>
                <StatusBar style="light" />
                <Text>SLD View</Text>
                </View>
        )
    }
}

export default Sld;