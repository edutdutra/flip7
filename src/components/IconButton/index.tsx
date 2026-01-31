import React from "react";
import { OpaqueColorValue, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export interface IIconButtonProps {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  onPress?: () => void;
  color?: string | OpaqueColorValue;
  size?: number;
}

export function IconButton({
  iconName,
  color,
  size = 24,
  onPress,
}: IIconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
}
