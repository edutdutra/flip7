import { IPlayer } from "@/types/player";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface IPlayerItemListProps {
  onPress: (player: IPlayer) => void;
  position: number;
  data: IPlayer;
}

export function PlayerItemList({
  position,
  data,
  onPress,
}: IPlayerItemListProps) {
  const handlePlayerOnPress = () => {
    onPress(data);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePlayerOnPress}>
      <View style={styles.content}>
        <Text style={styles.text}>{position}</Text>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View>
        <Text style={styles.points}>69</Text>
      </View>
    </TouchableOpacity>
  );
}
