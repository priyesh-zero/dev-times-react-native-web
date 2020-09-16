import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { isNative, dimensions, colorPallet } from "../../constants/index";
import { article } from "../../interface/Headline";

const dim = {
  x: isNative ? dimensions.width : 500,
  y: 100,
};

const styles = StyleSheet.create({
  card: {
    width: dim.x,
    height: dim.y,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    paddingLeft: dim.y + 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: dim.y,
    resizeMode: "cover",
    backgroundColor: "gray",
  },
});

export const CategoryCard: FC<{ article: article }> = ({ article }) => {
  console.log(article.title);
  console.log(article.urlToImage);
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: article.urlToImage }}
        defaultSource={require("../../../assets/default.jpeg")}
        style={styles.image}
      />
      <Text>{article.title}</Text>
    </TouchableOpacity>
  );
};

/* <TouchableOpacity style={styles.container}> */
/*       <Image source={{ uri: article.urlToImage }} style={styles.image} /> */
/*       <View style={styles.textView}> */
/*         <Text style={styles.text}>{article.title}</Text> */
/*       </View> */
/*     </TouchableOpacity> */
