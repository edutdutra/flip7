import { styles } from "@/screens/layout";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack />
    </View>
  );
}
