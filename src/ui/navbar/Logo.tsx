import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  logoContainer: {
    width: 35,
    height: 35,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "stretch",
  },
});
export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/icon.png")}
      />
    </View>
  );
};
