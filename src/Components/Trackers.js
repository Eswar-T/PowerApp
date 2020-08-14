import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Trackers extends Component{
    render(){
        return(
            <View>
                <StatusBar style="light" />
                <Text>Trackers View</Text>
                </View>
        )
    }
}

export default Trackers;