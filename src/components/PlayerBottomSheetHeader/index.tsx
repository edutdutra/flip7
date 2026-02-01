import { COLORS } from "@/theme/colors";
import { Text, View } from "react-native";
import { IconButton } from "../IconButton";
import { styles } from "./styles";

interface IPlayerBottomSheetHeaderProps {
  playerName: string;
  onClose: () => void;
}

export function PlayerBottomSheetHeader({
  playerName,
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
      <View>
        <Text style={styles.text}>{playerName}</Text>
      </View>
      <IconButton
        iconName="checkmark-circle-sharp"
        color={COLORS.primary}
        size={32}
      />
    </View>
  );
}
