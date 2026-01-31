import { COLORS } from "@/theme/colors";
import { ECardType, ICard, TCardColorKey } from "@/types/card";
import { useMemo, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ICardButtonProps {
  data: ICard;
}

export function CardButton({ data }: ICardButtonProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  const getCardColor = (value: number) => {
    const key = `card_${value}` as TCardColorKey;
    return COLORS[key] ?? COLORS.card_special;
  };

  const card = useMemo(() => {
    switch (data.type) {
      case ECardType.NUMBER:
        return {
          label: data.value.toString(),
          color: getCardColor(data.value),
        };
      case ECardType.PLUS:
        return { label: `+${data.value}`, color: COLORS.card_special };
      case ECardType.MULTIPLY:
        return { label: `x${data.value}`, color: COLORS.card_special };
    }
  }, [data.type, data.value]);

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={handleSelect}
    >
      <Text
        style={[
          styles.text,
          { color: card.color },
          isSelected && styles.selectedText,
        ]}
      >
        {card.label}
      </Text>
    </TouchableOpacity>
  );
}
