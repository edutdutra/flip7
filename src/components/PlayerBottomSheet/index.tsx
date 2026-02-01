import { Modal, View } from "react-native";

import { CARDS } from "@/constants/cards";
import { IPlayer } from "@/types/player";
import { CardButton } from "../CardButton";
import { PlayerBottomSheetHeader } from "../PlayerBottomSheetHeader";
import { styles } from "./styles";

interface IPlayerBottomSheetProps {
  player: IPlayer | null;
  onClose: () => void;
}

export function PlayerBottomSheet({
  player,
  onClose,
}: IPlayerBottomSheetProps) {
  if (!player) {
    return null;
  }

  return (
    <Modal
      transparent
      visible={!!player}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <PlayerBottomSheetHeader playerName={player.name} onClose={onClose} />

          <View style={styles.content}>
            {CARDS.map((card) => (
              <CardButton key={`${card.value}-${card.type}`} data={card} />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}
