import React, { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
