import React from "react";
import { Stack } from "expo-router";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

type HeaderWithTitleProps = {
  title: string;
  itemsInCart: number
};

export default function HeaderWithTitle({ title, itemsInCart}: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitleStyle: {
          fontWeight: "normal",
        },
        headerTitle: props => <HeaderLeft title={title} itemsInCart={itemsInCart} />,
        headerRight: props => <HeaderRight />
      }}
    />
  );
}
