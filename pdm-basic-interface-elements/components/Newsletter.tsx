import { View, Text, Switch, SwitchProps, StyleSheet } from "react-native";
import React from "react";

type NewsletterProps = SwitchProps;

export default function Newsletter({ ...rest }: NewsletterProps) {
  return (
    <View style={styles.container}>
      <Text>Subscribe to Newsletter</Text>
      <Switch {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 8
  }
});