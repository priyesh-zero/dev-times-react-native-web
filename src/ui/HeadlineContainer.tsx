import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { HeadingCard } from "./headline/HeadingCard";
import { article } from "src/interface/Headline";
import { AntDesign } from "@expo/vector-icons";
import { isNative } from "../constants/index";

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
  },
  navigationButton: {
    position: "absolute",
    top: 10,
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF99",
  },
  navigationButtonLeft: {
    left: 10,
  },
  navigationButtonRight: {
    right: 10,
  },
});

interface componentProps {
  articles: article[];
  fetchMore: () => void;
}

export const HeadLineContainer: React.FC<componentProps> = ({
  articles,
  fetchMore,
}) => {
  const currentIndex = React.useRef(0);
  const flatListRef = React.useRef<FlatList | null>();

  const handleNext = () => {
    if (articles.length - 1 === currentIndex.current) return;
    flatListRef.current?.scrollToIndex({
      index: ++currentIndex.current,
      animated: true,
    });
    if (articles.length - 2 === currentIndex.current) {
      fetchMore();
    }
  };

  const handlePrev = () => {
    if (currentIndex.current === 0) return;
    flatListRef.current?.scrollToIndex({
      index: --currentIndex.current,
      animated: true,
    });
  };
  return (
    <View>
      <Text style={styles.sectionHeader}>Top Headlines</Text>
      <View>
        <FlatList
          data={articles}
          renderItem={(item) => <HeadingCard article={item.item} />}
          keyExtractor={(item) => item.publishedAt}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={(ref) => (flatListRef.current = ref)}
          onEndReachedThreshold={2}
          onEndReached={() => fetchMore()}
        />
        {!isNative && (
          <>
            <TouchableOpacity
              style={[styles.navigationButton, styles.navigationButtonLeft]}
              onPress={handlePrev}
            >
              <AntDesign name="caretleft" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNext}
              style={[styles.navigationButton, styles.navigationButtonRight]}
            >
              <AntDesign name="caretright" size={24} color="black" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
