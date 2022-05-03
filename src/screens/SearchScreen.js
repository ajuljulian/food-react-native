import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList
          restaurants={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <RestaurantList
          restaurants={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <RestaurantList
          restaurants={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
