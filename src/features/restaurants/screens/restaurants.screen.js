import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../componets/restaurant-info.componets";

export const RestuarantsScreen = () => (
  <SafeAreaView style={style.container}>
    <View style={style.statusbar}>
      <Searchbar />
    </View>
    <View style={style.RestuarantInfoStyle}>
      <RestuarantInfoCard />
    </View>
  </SafeAreaView>
);
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "red",
  },
  statusbar: {
    padding: 16,
    backgroundColor: "white",
  },
  RestuarantInfoStyle: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
