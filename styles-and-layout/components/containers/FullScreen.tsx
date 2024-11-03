import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { DEFAULT_GAP, DEFAULT_PADDING } from "../../constants/globalStyles";

type FullScreenProps = {
  children: ReactNode;
  center?: boolean
};

export default function FullScreen({ children, center = false }: FullScreenProps) {
  return (
    <ScrollView>
      <View style={[styles.container, center ? styles.center : undefined]}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_PADDING,
    gap: DEFAULT_GAP
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});
