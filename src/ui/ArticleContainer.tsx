import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { dimensions, isNative, colorPallet } from "../constants/index";
import { article } from "../interface/Headline";
import { ArticleInfo } from "./article/ArticleInfo";
import { NavigationStack } from "../interface/Navigation";

declare const window: any;

interface ArticleContainerProps {
  article: article;
}

export const ArticleContainer: React.FC<ArticleContainerProps> = ({
  article,
}) => {
  const navigation = useNavigation<NavigationStack<"Article">>();
  const handleClick = () => {
    if (isNative) {
      navigation.push("WebView", { url: article.url });
    } else {
      window.location.replace(article.url);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image style={styles.image} source={{ uri: article.urlToImage }} />
        </View>
        {!isNative && (
          <View style={styles.headerRight}>
            <ArticleInfo
              title={article.title}
              author={article.author || "Anonymous"}
              sourceName={article.source.name}
              publishedAt={article.publishedAt}
            />
          </View>
        )}
      </View>
      <ScrollView>
        {isNative && (
          <View style={styles.headerRight}>
            <ArticleInfo
              title={article.title}
              author={article.author || "Anonymous"}
              sourceName={article.source.name}
              publishedAt={article.publishedAt}
            />
          </View>
        )}
        <View>
          <Text style={[styles.para, styles.italic]}>
            {article.description}
          </Text>
        </View>
        <View>
          <Text style={styles.para}>{article.content}</Text>
        </View>
        <Text onPress={handleClick} style={styles.link}>
          Read More...
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    width: isNative ? dimensions.width : dimensions.width * 0.7,
    flex: 1,
  },
  header: {
    flexDirection: isNative ? "column" : "row",
  },
  headerLeft: {
    width: isNative ? dimensions.width : dimensions.width * 0.7 * 0.5,
    height: isNative
      ? dimensions.width * 0.56
      : dimensions.width * 0.7 * 0.5 * 0.56,
  },
  headerRight: {
    width: isNative ? dimensions.width : dimensions.width * 0.7 * 0.5,
  },
  image: {
    width: isNative ? dimensions.width : dimensions.width * 0.7 * 0.5,
    height: isNative
      ? dimensions.width * 0.56
      : dimensions.width * 0.7 * 0.5 * 0.56,
  },
  para: {
    fontSize: 18,
    margin: 10,
    color: colorPallet.textBlackPrimary,
  },
  link: {
    margin: 10,
    fontSize: 18,
    color: colorPallet.primary,
    textDecorationLine: "underline",
    textAlign: "right",
  },
  italic: {
    fontStyle: "italic",
  },
});
