import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonProps {
  text: string;
}

export function Button({ text }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
