import React, { Component } from 'react'
import { View, Text, TouchableOpacity,ScrollView,Modal } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';


class Smb extends Component{
    constructor(props){
        super(props);
        this.state={
            pickerState:'Select a device name',
            openModal:false,
            bool :false,
            bool1:false,
        data: [{
          value: 'G3',
          title: 'G3'
        }, {
          value: 'H3',
          title: 'H3'
        }, {
          value: 'G1',
          title: 'G1'
        }],
    
        }
      }


      modalOpen = () => {
          this.setState({ openModal:true,bool:true })
      } 
 
      setPickerValue = (newValue) => {
          this.setState({
              pickerState : newValue,
              bool1:true,
              openModal:false
          })
      } 


    render(){
        return(
            <View style={{ flex:1,backgroundColor:'white' }}>
                <StatusBar style="light" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* <Text style={{ alignSelf:'center' }}>Device : </Text>
                    <View style={{ borderBottomWidth:1,borderBottomColor:'blue',width:100,alignSelf:'center' }} />
                    <Text style={{ alignSelf:'center' }}>Last Updated Time Stamp : </Text>
                    <View style={{ borderBottomWidth:1,borderBottomColor:'blue',width:200,alignSelf:'center' }} /> */}
                    
                    <TouchableOpacity style={{ width:'80%',borderWidth:1,borderColor:'gray',height:40,marginTop:'4%',alignSelf:'center' }}
                                      onPress={this.modalOpen}>
                       <Text style={{ textAlign:'center',paddingTop:6 }}>{this.state.bool1 == true ? <Text> Selected Device Name : {this.state.pickerState}</Text> : this.state.pickerState  }</Text>
                    </TouchableOpacity>
                    
                    {/* <Text>Select Date</Text> */}
                    
                    <View style={{ height:200,width:300,backgroundColor: '#a0aeff',borderRadius:14,alignSelf:'center', marginTop:30  }} >
                       <View style={{ position:'absolute',top:20,height:20,width:100,backgroundColor:'white',borderRadius:10,marginLeft:-10 }}/>
                        <Text style={{ alignSelf:'center',top:80,fontWeight:'bold',fontSize:16 }}>Average Voltage</Text>
                        <View style={{ position:'absolute',right:0,bottom:20,height:20,width:100,backgroundColor:'white',borderRadius:10,marginRight:-20 }}/>
                    </View>
                    <View style={{ height:200,width:300,backgroundColor:'#FFFF00',borderRadius:14,alignSelf:'center', marginTop:30  }} >
                    <View style={{ position:'absolute',top:20,height:20,width:100,backgroundColor:'white',borderRadius:10,marginLeft:-10 }}/>
                        <Text style={{ alignSelf:'center',top:80,fontWeight:'bold',fontSize:16 }}>Average Current</Text>
                        <View style={{ position:'absolute',right:0,bottom:20,height:20,width:100,backgroundColor:'white',borderRadius:10,marginRight:-20 }}/>
                    </View>
                    <View style={{ height:200,width:300,backgroundColor:'#ffa0a0',borderRadius:14,alignSelf:'center', marginTop:30  }} >
                    <View style={{ position:'absolute',top:20,height:20,width:100,backgroundColor:'white',borderRadius:10,marginLeft:-10 }}/>
                        <Text style={{ alignSelf:'center',top:80,fontWeight:'bold',fontSize:16 }}>Average Power</Text>
                        <View style={{ position:'absolute',right:0,bottom:20,height:20,width:100,backgroundColor:'white',borderRadius:10,marginRight:-20 }}/>
                    </View>
                    <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:60,bottom:20 }}>
                        <TouchableOpacity style={{ height:50,width:120,backgroundColor:'green',borderRadius:6 }}>
                            <Text style={{ color:'white',alignSelf:'center',paddingTop:16 }}>EXPORT CSV</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height:50,width:120,backgroundColor:'green',borderRadius:6 }}>
                        <Text style={{ color:'white',textAlign:'center',paddingTop:16 }}>GRAPH VIEW</Text>
                        </TouchableOpacity>
                    </View>    
                </ScrollView>
                { this.state.bool && 
                    <Modal visible={this.state.openModal} animationType={"slide"} transparent={true}>
                       <View style={{ margin:20,padding:20,bottom:20,left:20,right:20,backgroundColor:'gray',position:'absolute',alignItems:"center",borderRadius:10 }}>
                           <Text>Select a Device Name </Text>
                            {
                                this.state.data.map((items,index)=>(
                                    <View>
                                      
                                      <TouchableOpacity key={index} onPress={()=>this.setPickerValue(items.value)}>
                                          <Text style={{ textAlign:'center' }}>{items.title}</Text>
                                      </TouchableOpacity>
                                      <View style={{ borderBottomColor:'gray',borderBottomWidth:1,width:200 }}/>    
                                     </View>   
                                ))
                            }
                            <TouchableOpacity onPress={()=>this.setState({ openModal:false })}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                    </View>    
                </Modal> }
            </View>
        )
    }
}

export default Smb;
