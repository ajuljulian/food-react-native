import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");

  console.log(restaurant);

  const getRestaurant = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderColor: "red",
    borderWidth: 0,
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
  },

  image: {
    height: 200,
    width: 300,
    margin: 10,
    borderRadius: 8,
  },
});

export default RestaurantsShowScreen;
