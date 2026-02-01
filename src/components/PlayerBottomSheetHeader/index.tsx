import { COLORS } from "@/theme/colors";
import { Text, View } from "react-native";
import { IconButton } from "../IconButton";
import { styles } from "./styles";

interface IPlayerBottomSheetHeaderProps {
  points: number;
  playerName: string;
  onClose: () => void;
}

export function PlayerBottomSheetHeader({
  playerName,
  points,
  onClose,
}: IPlayerBottomSheetHeaderProps) {
  return (
    <View style={styles.container}>
      <IconButton
        iconName="close-circle-sharp"
        color={COLORS.red}
        size={32}
        onPress={onClose}
      />
      <View style={styles.content}>
        <Text style={styles.text}>{playerName}</Text>
        <Text style={styles.points}>+{points}</Text>
      </View>
      <IconButton
        iconName="checkmark-circle-sharp"
        color={COLORS.primary}
        size={32}
      />
    </View>
  );
}
