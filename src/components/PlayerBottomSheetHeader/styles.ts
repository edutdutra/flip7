import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: COLORS.backdrop,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
