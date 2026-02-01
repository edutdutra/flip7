import { Modal, View } from "react-native";

import { CARDS } from "@/constants/cards";
import { ECardType, ICard } from "@/types/card";
import { IPlayer } from "@/types/player";
import { useMemo, useState } from "react";
import { CardButton } from "../CardButton";
import { PlayerBottomSheetHeader } from "../PlayerBottomSheetHeader";
import { styles } from "./styles";

interface IPlayerBottomSheetProps {
  onAddPoints(playerId: string, points: number): void;
  onClose: () => void;
  player: IPlayer | null;
}

export function PlayerBottomSheet({
  player,
  onClose,
  onAddPoints,
}: IPlayerBottomSheetProps) {
  const [cards, setCards] = useState<ICard[]>([]);

  const points = useMemo(() => {
    return cards.reduce((acc, card) => {
      {
        if (card.type === ECardType.NUMBER) {
          return acc + card.value;
        } else if (card.type === ECardType.PLUS) {
          return acc + card.value;
        } else if (card.type === ECardType.MULTIPLY) {
          return acc * card.value;
        }
        return acc;
      }
    }, 0);
  }, [cards]);

  if (!player) {
    return null;
  }

  const handleCloseBottomSheet = () => {
    setCards([]);
    onClose();
  };

  const handleAddPointsToPlayer = () => {
    onAddPoints(player.id, points);
    handleCloseBottomSheet();
  };

  const handleSumPoints = (card: ICard, action: "ADD" | "REMOVE") => {
    if (action === "REMOVE") {
      setCards((prevCards) => prevCards.filter((c) => c !== card));
    }

    if (action === "ADD") {
      setCards((prevCards) => [...prevCards, card]);
    }
  };

  return (
    <Modal
      transparent
      visible={!!player}
      animationType="fade"
      onRequestClose={handleCloseBottomSheet}
    >
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <PlayerBottomSheetHeader
            onConfirm={handleAddPointsToPlayer}
            onClose={handleCloseBottomSheet}
            playerName={player.name}
            points={points}
          />

          <View style={styles.content}>
            {CARDS.map((card) => (
              <CardButton
                key={`${card.value}-${card.type}`}
                data={card}
                onPress={handleSumPoints}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}
