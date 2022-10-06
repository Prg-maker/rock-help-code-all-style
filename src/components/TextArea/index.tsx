import React from "react";
import { TextInput, View } from "react-native";
import theme from "../../styles/theme";

import { styles } from "./styles";

export function TextArea() {
  return (
    <TextInput
      placeholder="Descrição do problema "
      placeholderTextColor={theme.colors.gray[300]}
      style={styles.container}
      multiline
    />
  );
}
