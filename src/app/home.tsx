import { Button } from "@/components/Button";
import { styles } from "@/screens/home";

import { View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Button text="Novo jogo" />
    </View>
  );
}
