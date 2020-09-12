import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbar: {
    padding: 5,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "green",
  },
  text: {
    color: "wheat",
    fontSize: 18,
  },
});

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Logo</Text>
      <Text style={styles.text}>Company Name</Text>
      <Text style={styles.text}>Icon</Text>
    </View>
  );
};
