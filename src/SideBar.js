import React,{Component} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Dimensions, StyleSheet,TextInput } from 'react-native'


export default class SideBar extends Component {
  constructor() {
    super();
    this.state={
      bool0:true,
      bool1:false,
      bool2:false,
      bool3:false,
      bool4:false,
      bool5:false,
      bool6:false,
      bool7:false,
      bool8:false,
      bool9:false,
    }
  }

  renderBool0 = () => {
    this.setState({ bool0:true,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false,
                    bool6:false,
                    bool7:false,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("PlantView")})
  }

  renderBool1 = () => {
    this.setState({ bool0:false,
                    bool1:true,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false,
                    bool6:false,
                    bool7:false,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("SLD")})
  }
  renderBool2 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:true,
                    bool3:false,
                    bool4:false,
                    bool5:false,
                    bool6:false,
                    bool7:false,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("Layout")})
  }
  renderBool3 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:true,
                    bool4:false,
                    bool5:false,
                    bool6:false,
                    bool7:false,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("Power")})
  }
  renderBool4 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:true,
                    bool5:false,
                    bool6:false,
                    bool7:false,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("HTPanels")})
  }
  renderBool5 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:true,
                    bool6:false,
                    bool7:false,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("Inverters")})
  }
  renderBool6 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false,
                    bool6:true,
                    bool7:false,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("RMU")})
  }
  renderBool7 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false,
                    bool6:false,
                    bool7:true,
                    bool8:false,
                    bool9:false },()=>{this.props.navigation.navigate("SMB")})
  }
  renderBool8 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false,
                    bool6:false,
                    bool7:false,
                    bool8:true,
                    bool9:false },()=>{this.props.navigation.navigate("Trackers")})
  }
  renderBool9 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false,
                    bool6:false,
                    bool7:false,
                    bool8:false,
                    bool9:true },()=>{this.props.navigation.navigate("Alarams")})
  }

  render() {
    return (
           <View>
                <View style={{ backgroundColor:'#800000', }}>  
                    <Image source={require('../assets/tracker-logo.png')}/>  
                </View> 
                <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>
                <ScrollView>
                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool0 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool0}>
                           <Text style={[{ color: this.state.bool0 == false ? '#800000' : 'white' },styles.textStyles]}>PLANT VIEW</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool1 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool1}>
                             <Text style={[{ color: this.state.bool1 == false ? '#800000' : 'white' },styles.textStyles]}>SLD</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool2 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool2}>
                             <Text style={[{ color: this.state.bool2 == false ? '#800000' : 'white' },styles.textStyles]}>LAYOUT</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool3 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool3}>
                              <Text style={[{ color: this.state.bool3 == false ? '#800000' : 'white' },styles.textStyles]}>POWER</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool4 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool4}>
                             <Text style={[{ color: this.state.bool4 == false ? '#800000' : 'white' },styles.textStyles]}>HT-PANELS</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool5 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool5}>
                             <Text style={[{ color: this.state.bool5 == false ? '#800000' : 'white' },styles.textStyles]}>INVERTERS</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>
                    
                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool6 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool6}>
                             <Text style={[{ color: this.state.bool6 == false ? '#800000' : 'white' },styles.textStyles]}>RMU</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool7 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool7}>
                             <Text style={[{ color: this.state.bool7 == false ? '#800000' : 'white' },styles.textStyles]}>SMB</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool8 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool8}>
                             <Text style={[{ color: this.state.bool8 == false ? '#800000' : 'white' },styles.textStyles]}>TRACKERS</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool9 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool9}>
                             <Text style={[{ color: this.state.bool9 == false ? '#800000' : 'white' },styles.textStyles]}>ALARAMS</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>
            </ScrollView>
        </View>
         
    );
  }
}

const styles = StyleSheet.create({
    touchStyle:{
      backgroundColor:'white',
      height:50,
      width:'100%',
    },
    textStyles:{
      textAlign:'center',
      paddingTop:12
    }
  })