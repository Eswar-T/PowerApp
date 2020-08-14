import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Rmu extends Component{
    render(){
        return(
            <View>
                <StatusBar style="light" />
                <Text>Rmu View</Text>
                </View>
        )
    }
}

export default Rmu;