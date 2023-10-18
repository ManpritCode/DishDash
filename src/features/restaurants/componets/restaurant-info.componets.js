import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "some Restaurant ",
    icon,
    photos = [
      "https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674825837.jpg?fit=around|562.5:360&crop=562.5:360;*,*",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restuarant;

  return (
    <Card style={styles.card} elevation={4}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
