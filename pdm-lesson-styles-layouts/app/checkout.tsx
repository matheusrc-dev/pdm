import { View, Text, Alert } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import Card from "@/components/containers/Card";
import PriceTag from "@/components/checkout/PriceTag";
import CheckoutButton from "@/components/checkout/CheckoutButton";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

  return (
    <FullScreen center>
      {/* <HeaderHidden /> */}
      <HeaderWithTitle title="Checkout!" />

      <Card title="Pagamento">
        <Text>Cofirme sua compra...</Text>

        <PriceTag price={266} />

        <CheckoutButton customTitle="Finalizar!" onPress={handleCheckout} />
      </Card>
    </FullScreen>
  );
}
