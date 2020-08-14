import React, { Component } from 'react'
import { View, Text,Image,ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';


class PlantView extends Component{
    render(){
        return(
             <ScrollView showsVerticalScrollIndicator={false}>
               <StatusBar style="light" />
                    <View style={{ backgroundColor:'#E8E8E8',height:80,marginTop:16,marginLeft:16,marginRight:16,width:'88%',alignSelf:'center',borderRadius:12 }}>
                        <Text style={{ color:'#800000',fontSize:20,textAlign:'center',paddingTop:12 }}>UVPL Solar Power Ltd, 9.2MW Solar Power Plant Kodangal</Text>
                    </View>
                    <View style={{ backgroundColor:'#E8E8E8',height:'auto',width:250,alignSelf:'center',marginTop:'18%',borderRadius:12 }}>
                        <Image source={require('../../assets/panel_with_sun.png')} style={{ height:150,width:150,marginLeft:'20%',marginTop:12 }}/>
                            <View style={{ padding:10,alignSelf:'center' }}>
                                <Text style={{ color:'#800000' }}>Radiation Fixed = 93 W/m2</Text>
                                <Text style={{ color:'#800000' }}>Radiation Tilt = 89 W/m2</Text>
                                <Text style={{ color:'#800000' }}>Irradiation Fixed = 60 kWh/m2 </Text>
                                <Text style={{ color:'#800000' }}>Irradiation Fixed = 50 kWh/m2</Text>
                                <Text style={{ color:'#800000' }}>Ambient Temp = 20 C</Text>
                                <Text style={{ color:'#800000' }}>Module Temp = 25 C</Text>
                            </View>
                    </View>
                    <View style={{ backgroundColor:'#E8E8E8',height:'auto',width:250,alignSelf:'center',marginTop:'18%',borderRadius:12 }}>
                        <Image source={require('../../assets/panel.jpg')} style={{ height:150,width:230,alignSelf:'center',marginTop:16 }}/>
                            <View style={{ padding:10,alignSelf:'center' }}>
                                <Text style={{ color:'#800000' }}>DC Power = 93 kW</Text>
                                <Text style={{ color:'#800000' }}>Max.DC Power = 89.00 kW</Text>
                            </View>
                    </View>
                    <View style={{ backgroundColor:'#E8E8E8',height:'auto',width:250,alignSelf:'center',marginTop:'18%',borderRadius:12 }}>
                       <Image source={require('../../assets/acpower.jpg')} style={{ height:150,width:230,alignSelf:'center',marginTop:16 }}/>
                            <View style={{ padding:10,alignSelf:'center' }}>
                                <Text style={{ color:'#800000' }}>AC Power = 93 kW</Text>
                                <Text style={{ color:'#800000' }}>Max.AC Power = 89.00 kW</Text>
                                <Text style={{ color:'#800000' }}>Today Energy = 93 kWh</Text>
                                <Text style={{ color:'#800000' }}>Total Energy = 89.00 MWh</Text>
                            </View>
                    </View>

                    <View style={{ borderLeftColor:'#800000',borderLeftWidth:1,b0orderStyle:'solid' }}/>

                    <View style={{ backgroundColor:'#E8E8E8',height:'auto',width:250,alignSelf:'center',marginTop:'18%',borderRadius:12 }}>
                        <Image source={require('../../assets/substation.jpg')} style={{ height:150,width:230,alignSelf:'center',marginTop:16 }}/>
                            <View style={{ padding:10,alignSelf:'center' }}>
                                <Text style={{ color:'#800000' }}>Today Import = 93 kWh</Text>
                                <Text style={{ color:'#800000' }}>Today Export = 89.00 kWh</Text>
                                <Text style={{ color:'#800000' }}>Life Import = 93 MWh</Text>
                                <Text style={{ color:'#800000' }}>Life Export = 89.00 MWh</Text>
                            </View>
                    </View>
             </ScrollView>
        )
    }
}

export default PlantView;