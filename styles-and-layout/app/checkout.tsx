import { View, Text, Alert } from "react-native";
import React from "react";
import FullScreen from "../components/containers/FullScreen";
import HeaderHidden from "../components/headers/HeaderHidden";
import HeaderWithTitle from "../components/headers/HeaderWithTitle";
import Card from "../components/containers/Card";
import PriceTag from "../components/checkout/PriceTag";
import CheckoutButton from "../components/checkout/CheckoutButton";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso! Compra efeutada!");
  };

  return (
    <FullScreen center>
      <HeaderWithTitle title="Checkout" />

      <Card title="Pagamento">
        <Text>Confirme sua compra</Text>
        <PriceTag price={299} />
        <CheckoutButton customTitle="Finalizar" onPress={handleCheckout} />
      </Card>
    </FullScreen>
  );
}
