import { DEFAULT_GAP, DEFAULT_PADDING } from "@/constants/globalStyles";
import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type FullScreenProps = {
  children: ReactNode;
  center?: boolean;
};

export default function FullScreen({
  children,
  center = false,
}: FullScreenProps) {
  return (
    <View style={[styles.container, center ? styles.center : undefined]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_PADDING,
    gap: DEFAULT_GAP * 2,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
