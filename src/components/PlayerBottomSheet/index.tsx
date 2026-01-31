import { Modal, Text, View } from "react-native";

import { styles } from "./styles";

interface IPlayerBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlayerBottomSheet({
  isOpen,
  onClose,
}: IPlayerBottomSheetProps) {
  return (
    <Modal
      transparent
      visible={isOpen}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Opções</Text>
          <Text>▶ Reproduzir</Text>
          <Text>▶ Adicionar à fila</Text>
          <Text>▶ Compartilhar</Text>
        </View>
      </View>
    </Modal>
  );
}
