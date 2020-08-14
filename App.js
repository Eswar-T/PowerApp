import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Dimensions,TouchableOpacity,Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import PlantView from './src/Components/PlantView';
import Power from './src/Components/Power';
import Rmu from './src/Components/Rmu';
import Sld from './src/Components/Sld';
import Trackers from './src/Components/Trackers';
import Smb from './src/Components/Smb';
import Layout from './src/Components/Layout';
import Inverters from './src/Components/Inverters';
import Ht_Panels from './src/Components/Ht_Panels';
import Alarams from './src/Components/Alarams';
import SideMenu from './src/SideBar';
import { FontAwesome5 } from '@expo/vector-icons';


const Stack = createStackNavigator({
  PlantView: { screen : PlantView,
               navigationOptions : ({ navigation }) => ({
                 headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
                 headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>PLANT VIEW</Text>,
                 headerStyle: { backgroundColor: '#800000' }
                  })
              },
  SLD: { screen: Sld,
         navigationOptions : ({ navigation }) => ({
            headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
            headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>SLD</Text>,
            headerStyle: { backgroundColor: '#800000' }
           })
        },
  Layout: { screen : Layout,
            navigationOptions : ({ navigation }) => ({
              headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
              headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>LAYOUT</Text>,
              headerStyle: { backgroundColor: '#800000' }
            })
          },
  Power: { screen : Power,
           navigationOptions : ({ navigation }) => ({
              headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
              headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>POWER</Text>,
              headerStyle: { backgroundColor: '#800000' }
              })
          },
  HTPanels: { screen : Ht_Panels,
              navigationOptions : ({ navigation }) => ({
                    headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
                    headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>LAYOUT</Text>,
                    headerStyle: { backgroundColor: '#800000'}
              })
            },
  Inverters: { screen : Inverters,
                navigationOptions : ({ navigation }) => ({
                    headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
                    headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>INVERTERS</Text>,
                    headerStyle: { backgroundColor: '#800000'} 
                })
             },
  RMU: { screen: Rmu,
         navigationOptions : ({ navigation }) => ({
               headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
               headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>RMU</Text>,
               headerStyle: { backgroundColor: '#800000'}
           })
       },
  SMB: { screen : Smb,
         navigationOptions : ({ navigation }) => ({
           headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
           headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>SMB</Text>,
           headerStyle: { backgroundColor: '#800000'}
        })
      }, 
  Trackers:{ screen : Trackers,
             navigationOptions : ({ navigation }) => ({
                  headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
                  headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>TRACKERS</Text>,
                  headerStyle: { backgroundColor: '#800000'}
             })
           },
  Alarams: { screen: Alarams,
             navigationOptions : ({ navigation }) => ({
                   headerLeft : ()=>  <FontAwesome5 name="bars" color="white" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>,
                   headerTitle: ()=> <Text style={{ color:'white',fontSize:18,fontWeight:'bold' }}>ALARAMS</Text>,
                   headerStyle: { backgroundColor: '#800000'}
              })
            } 
}
)

const DrawerStack = createDrawerNavigator({
  
 Stack : {
    screen : Stack
 } 

},
{
  contentComponent: props => <SideMenu {...props}/>,
  drawerBackgroundColor:'white',
  drawerPosition: "left",
  drawerWidth: Dimensions.get("window").width * 0.7,

});



const FullStack = createAppContainer(DrawerStack)

const App = () => {
  return (
       
         
      <FullStack/>
      
  );
}
export default App;
      {/* <StatusBar style="auto" /> */}
