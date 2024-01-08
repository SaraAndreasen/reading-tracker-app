import React from "react";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface LoaderProps {
  size: number;
  color: string;
}

export function Loader({ size, color }: LoaderProps) {
  return (
    <View>
      <Ionicons name="reload-outline" size={size} color={color} />
    </View>
  );
}
