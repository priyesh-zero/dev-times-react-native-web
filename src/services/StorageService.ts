import { AsyncStorage } from "react-native";

export const getItem = async (key: string): Promise<string | null> =>
  AsyncStorage.getItem(key);

export const setItem = async (key: string, value: string) =>
  await AsyncStorage.setItem(key, value);
