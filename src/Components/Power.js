import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Power extends Component{
    render(){
        return(
            <View>
                <StatusBar style="light" />
                <Text>Power View</Text>
                </View>
        )
    }
}

export default Power;