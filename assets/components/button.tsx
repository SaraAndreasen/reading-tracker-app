import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  StyleSheet,
  Text,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewProps>;
}

export function GlobalButton({
  title,
  textStyle,
  containerStyle,
  ...restProps
}: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...restProps}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
