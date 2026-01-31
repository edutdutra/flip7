import React from "react";
import { TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

interface IIconButtonProps {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  size?: number;
}

export function IconButton({ iconName, size = 24 }: IIconButtonProps) {
  return (
    <TouchableOpacity>
      <Ionicons name={iconName} size={size} />
    </TouchableOpacity>
  );
}
