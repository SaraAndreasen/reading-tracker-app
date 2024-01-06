import { StyleSheet, Text, View } from "react-native";

export function MyStats() {
  return (
    <View>
      <Text>This is your stats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
