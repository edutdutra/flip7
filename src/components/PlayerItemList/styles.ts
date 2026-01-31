import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingVertical: 8,
    flexDirection: "row",
    paddingHorizontal: 12,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.card,
  },
  content: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
  },
  text: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  points: {
    color: COLORS.blue,
    fontWeight: "bold",
    fontSize: 20,
  },
});
