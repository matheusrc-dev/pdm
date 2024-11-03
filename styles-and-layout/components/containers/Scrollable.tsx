import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { DEFAULT_GAP, DEFAULT_PADDING } from "../../constants/globalStyles";

/**
 * index
 * checkout
 * compra
 */

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
    gap: DEFAULT_GAP
  },
});
