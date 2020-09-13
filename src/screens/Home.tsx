import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "../ui/Loader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Home = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {data && <Text>{JSON.stringify(data, null, 4)}</Text>}
      {error && <Text>{error.message}</Text>}
    </View>
  );
};
