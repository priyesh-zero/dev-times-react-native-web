import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Logo } from "./navbar/Logo";
import { CompanyName } from "./navbar/CompanyName";
import { colorPallet } from "./../constants/index";

const styles = StyleSheet.create({
  navbar: {
    padding: 5,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colorPallet.primary,
  },
  text: {
    color: "wheat",
    fontSize: 18,
  },
});

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Logo />
      <CompanyName />
      <Text style={styles.text}>Icon</Text>
    </View>
  );
};
