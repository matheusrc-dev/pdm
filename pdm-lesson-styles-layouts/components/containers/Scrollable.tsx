import { DEFAULT_GAP, DEFAULT_PADDING } from "@/constants/globalStyles";
import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type ScrollableProps = {
  children: ReactNode;
};

export default function Scrollable({ children }: ScrollableProps) {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_PADDING,
    gap: DEFAULT_GAP * 2,
  },
});
