import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { HeadingCard } from "./headline/HeadingCard";
import { article } from "src/interface/Headline";

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export const HeadLineContainer: React.FC<{ articles: article[] }> = ({
  articles,
}) => {
  return (
    <View>
      <Text style={styles.sectionHeader}>Top Headlines</Text>
      <FlatList
        data={articles}
        renderItem={(item) => <HeadingCard article={item.item} />}
        keyExtractor={(item) => item.publishedAt}
        horizontal={true}
      />
    </View>
  );
};
