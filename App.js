import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/user-home/homescreen';
import MenuPage from './components/menu/menupage';


const HomeStack = createStackNavigator();


function HStack() {
    return (
        <HomeStack.Navigator initialRouteName='Home'
        screenOptions= {{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#78ab78'  },
              headerTitleStyle :{
                fontWeight: 'bold',
              },
              headerTintColor: '#fff',
            }}>
        <HomeStack.Screen name="Home" component={Homepage} />
        <HomeStack.Screen name="Menu" component={MenuPage} />
        </HomeStack.Navigator>
    );
  }


export default function App() {
    return(
        <NavigationContainer>
        <HStack/>
        </NavigationContainer>
    );
}