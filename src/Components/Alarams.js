import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

class Alarams extends Component{
    render(){
        return(            
            <View>
               <StatusBar style="light" />
                <Text>Alarams View</Text>
                </View>
        )
    }
}

export default Alarams;