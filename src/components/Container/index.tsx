import { View } from "react-native";
import { styles } from "./styles";

interface IContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: IContainerProps) {
  return <View style={styles.container}>{children}</View>;
}
