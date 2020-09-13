import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { dimensions, colorPallet } from "../constants/index";

const styles = StyleSheet.create({
  backdrop: {
    /* width: dimensions.width, */
    /* height: dimensions.height, */
    position: "absolute",
    backgroundColor: "#000000CC",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loader: {
    position: "absolute",
    top: dimensions.height / 2,
    left: dimensions.width / 2,
    transform: [
      {
        translateX:
          dimensions.width * 0.4 > 200 ? -200 : dimensions.width * -0.4,
      },
      {
        translateY:
          dimensions.height * 0.4 > 200 ? -200 : dimensions.height * -0.4,
      },
    ],
    width: dimensions.width * 0.8,
    height: dimensions.width * 0.8,
    maxHeight: 400,
    maxWidth: 400,
    borderRadius: dimensions.width * 0.4 > 200 ? 200 : dimensions.width * 0.4,
    borderBottomColor: colorPallet.textPrimary,
    borderBottomWidth: 5,
    borderLeftColor: colorPallet.textPrimary,
    borderLeftWidth: 5,
    borderRightColor: colorPallet.textPrimary,
    borderRightWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 34,
    color: colorPallet.textPrimary,
    textAlign: "center",
  },
});

export const Loader = () => {
  return (
    <View style={styles.backdrop}>
      <View style={styles.loader}>
        <Text style={styles.text}>Loading</Text>
        <Text style={styles.text}> Please Wait!</Text>
      </View>
    </View>
  );
};
