import { Alert } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

  return (
    <FullScreen center>
      <HeaderWithTitle title="Checkout" itemsInCart={3} />
    </FullScreen>
  );
}
