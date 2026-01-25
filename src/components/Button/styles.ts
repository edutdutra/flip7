import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: "100%",
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.text,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
