import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native-paper";
import { RestuarantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import {theme} from "./src/infrastructure/theme"
import{useFonts as useOswald,Oswald_400Regular} from "@expo-google-fonts/oswald"
import{useFonts as useLato,Lato_400Regular} from "@expo-google-fonts/lato"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/componets/utility/safe-area.componets";
import {Ionicons} from "@expo/vector-icons";
import { RestuarantsContextProvider } from "./src/services/restaurants/restaurants.context"; 


const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants :"md-restaurant",
  Map:"md-map",
  Settings:"md-settings"
}

const Settings = ()=><SafeArea><Text>Settings</Text></SafeArea>
const Map = ()=><SafeArea><Text>Map</Text></SafeArea> 


export default function App() {

  const [oswalLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })
  if (!oswalLoaded || !latoLoaded) {
    return null
  
  }

  const screenOptions = ({ route}) =>{
    const iconName = TAB_ICON[route.name]
     return{
      tabBarIcon :({size ,color}) =>(
        <Ionicons name={iconName} size={size} color={color} />
      ),
     };
  };

  return ( 
    <>
    <ThemeProvider theme={theme}>
      <RestuarantsContextProvider>
      <NavigationContainer>
      <Tab.Navigator 
         screenOptions={screenOptions}
         tabBarOptions={
          {
          activeTintColor:"tomato",
          inactiveTintColor:"gray",
          
         }}
      >
        <Tab.Screen name="Restaurants" component={RestuarantsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </NavigationContainer>
      </RestuarantsContextProvider>
      <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

