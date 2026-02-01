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
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  points: {
    padding: 6,
    fontSize: 22,
    borderRadius: 8,
    fontWeight: "bold",
    color: COLORS.primary,
    backgroundColor: COLORS.secondary,
  },
});
