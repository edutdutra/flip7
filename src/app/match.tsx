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
        onClose={() => setSelectedPlayer(null)}
      />
    </Container>
  );
}
