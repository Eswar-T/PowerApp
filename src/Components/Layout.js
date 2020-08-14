import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Layout extends Component{
    render(){
        return(
            <View>
                <StatusBar style="light" />
                <Text>Layout View</Text>
                </View>
        )
    }
}

export default Layout;