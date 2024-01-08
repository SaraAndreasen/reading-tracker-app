import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSpring,
  withSequence,
} from "react-native-reanimated";

interface LoaderProps {
  size: number;
  color: string;
}

export function Loader({ size, color }: LoaderProps) {
  const rotation = useSharedValue(0);

  rotation.value = withSpring(withTiming(10));

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withRepeat(
            withSequence(
              withTiming(0 + "deg", { duration: 1000 }),
              withTiming(360 + "deg", { duration: 1000 })
            ),
            -1,
            false
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[style.container, animatedStyle]}>
      <Ionicons name="reload-outline" size={size} color={color} />
    </Animated.View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 22,
  },
  icon: {
    transform: [{ scale: 1 }],
  },
});
