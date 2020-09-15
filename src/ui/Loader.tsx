import React, { useEffect, useRef, useContext } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { dimensions, colorPallet, isNative } from "../constants/index";
import { LoaderContext } from "../context/LoaderContext";

const animationTiming = 1000;

const value = new Animated.Value(0);

const animationWOL = Animated.timing(value, {
  toValue: 1,
  duration: animationTiming,
  useNativeDriver: true,
});

const animation = Animated.loop(animationWOL);

const spin = value.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"],
});

const styles = StyleSheet.create({
  backdrop: {
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
      {
        // @ts-ignore: Accepts even when TSC is not updated
        rotateZ: spin,
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
  /* const [value, _setValue] = useState(new Animated.ValueXY({ x: 0, y: 0 })); */
  const { isLoading } = useContext(LoaderContext);
  const intervalVar = useRef<any>(null);
  useEffect(() => {
    if (isLoading) {
      animation.start();
      if (!isNative) {
        intervalVar.current = setInterval(() => {
          animation.reset();
          animation.start();
        }, animationTiming);
      }
    } else {
      animation.reset();
      animation.stop();
      if (intervalVar.current) {
        clearInterval(intervalVar.current);
      }
    }
    return () => {
      animation.reset();
      animation.stop();
      if (intervalVar.current) {
        clearInterval(intervalVar.current);
      }
    };
  }, [isLoading]);

  if (!isLoading) {
    return <></>;
  }

  return (
    <View style={styles.backdrop}>
      <Animated.View style={styles.loader}></Animated.View>
    </View>
  );
};
