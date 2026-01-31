import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.card,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: COLORS.primary,
  },
});
