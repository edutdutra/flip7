import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonProps {
  text: string;
  onPress?: () => void;
}

export function Button({ text, onPress }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
