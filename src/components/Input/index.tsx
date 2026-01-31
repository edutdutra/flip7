import { COLORS } from "@/theme/colors";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { IconButton, IIconButtonProps } from "../IconButton";
import { styles } from "./styles";

interface IInputProps {
  placeholder?: string;
  onSubmit: (text: string) => void;
  icon?: IIconButtonProps["iconName"];
}

export function Input({ placeholder, onSubmit, icon }: IInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!!text.trim()) {
      onSubmit(text);

      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        value={text}
        autoComplete="off"
        enterKeyHint="send"
        autoCorrect={false}
        style={styles.input}
        autoCapitalize="words"
        onChangeText={setText}
        placeholder={placeholder}
        onSubmitEditing={handleSubmit}
        placeholderTextColor={COLORS.blue_dark}
      />

      {!!icon && (
        <IconButton
          iconName={icon}
          size={24}
          color={COLORS.primary}
          onPress={handleSubmit}
        />
      )}
    </View>
  );
}
