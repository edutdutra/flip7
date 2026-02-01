import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { PlayerItemList } from "@/components/PlayerItemList";

import { PlayerBottomSheet } from "@/components/PlayerBottomSheet";
import { IPlayer } from "@/types/player";
import { UUIDUtils } from "@/utils/uuid";

export default function Match() {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer | null>(null);

  const handleAddPlayer = (name: string) => {
    const newPlayer: IPlayer = {
      id: UUIDUtils.generate(),
      name,
      points: [],
      totalPoints: 0,
    };

    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const handleAddPoints = (playerId: string, points: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === playerId) {
          const updatedPoints = [...player.points, points];
          const updatedTotalPoints = player.totalPoints + points;

          return {
            ...player,
            points: updatedPoints,
            totalPoints: updatedTotalPoints,
          };
        } else {
          return player;
        }
      }),
    );
  };

  return (
    <Container>
      <Input
        icon="person-add-sharp"
        onSubmit={handleAddPlayer}
        placeholder="ADICIONE UM JOGADOR"
      />

      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <PlayerItemList
            data={item}
            position={index + 1}
            onPress={(player) => setSelectedPlayer(player)}
          />
        )}
      />

      <PlayerBottomSheet
        player={selectedPlayer}
        onAddPoints={handleAddPoints}
        onClose={() => setSelectedPlayer(null)}
      />
    </Container>
  );
}
