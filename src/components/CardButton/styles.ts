import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 55,
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    borderColor: COLORS.black,
    backgroundColor: COLORS.secondary,
  },
  selectedContainer: {
    backgroundColor: COLORS.tertiary,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
  selectedText: {
    color: COLORS.black,
  },
});
