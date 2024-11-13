import { View, Text, Switch, SwitchProps } from "react-native";
import React from "react";

type NewsletterProps = SwitchProps;

export default function Newsletter({ ...rest }: NewsletterProps) {
  return (
    <View>
      <Text>Subscribe to Newsletter</Text>
      <Switch {...rest} />
    </View>
  );
}
