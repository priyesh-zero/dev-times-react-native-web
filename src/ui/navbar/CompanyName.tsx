import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  cnameContainer: {
    height: 35,
    width: 165,
    marginTop: -15,
  },
  image: {
    height: 50,
    resizeMode: "contain",
    width: 165,
  },
});
export const CompanyName = () => {
  return (
    <View style={styles.cnameContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/cname.png")}
      />
    </View>
  );
};
