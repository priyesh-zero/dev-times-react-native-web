import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { article } from "src/interface/Headline";
import { colorPallet, isNative } from "../constants/index";
import { CategoryCard } from "./category/CategoryCard";

const styles = StyleSheet.create({
  categoryContainer: {
    margin: 10,
    borderBottomColor: colorPallet.textPrimary,
    borderBottomWidth: 0,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 0,
  },
  navigationText: {
    color: colorPallet.primary,
    textDecorationLine: "underline",
  },
});

interface componentProps {
  title: string;
  articles: article[];
  fetchMore: (key: string) => void;
}

export const CategoryContainer: React.FC<componentProps> = ({
  articles,
  title,
  fetchMore,
}) => {
  const currentIndex = React.useRef(0);
  const flatListRef = React.useRef<FlatList | null>();
  const handleNext = () => {
    if (currentIndex.current === articles.length - 1) return;
    flatListRef.current!.scrollToIndex({
      index: ++currentIndex.current,
      animated: true,
    });
    if (currentIndex.current === articles.length - 2) fetchMore(title);
  };
  const handlePrev = () => {
    if (currentIndex.current === 0) return;
    flatListRef.current!.scrollToIndex({
      index: --currentIndex.current,
      animated: true,
    });
  };
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.sectionHeader}>{title}</Text>
      <FlatList
        data={articles}
        renderItem={(item) => <CategoryCard article={item.item} />}
        keyExtractor={(item) => item.publishedAt}
        horizontal={true}
        ref={(ref) => (flatListRef.current = ref)}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={2}
        onEndReached={() => fetchMore(title)}
      />
      {!isNative && (
        <View style={styles.navigation}>
          <TouchableOpacity onPress={handlePrev}>
            <Text style={styles.navigationText}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.navigationText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
