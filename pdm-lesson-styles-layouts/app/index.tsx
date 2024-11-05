import CheckoutButton from "@/components/checkout/CheckoutButton";
import Card from "@/components/containers/Card";
import Scrollable from "@/components/containers/Scrollable";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React from "react";

export default function index() {
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Scrollable>
      <HeaderWithTitle title="Carrinho" itemsInCart={3} />

      <Card
        title="Mouse sem fio 2.4Ghz"
        price={59.9}
        imageURL="https://m.media-amazon.com/images/I/61zkMRx+mpL._AC_SL1500_.jpg"
        productName="Mouse sem fio Logitech M280 com Conexão USB e Pilha Inclusa - Preto"
        priceBeforeDiscount={99.9}
      />

      <Card
        title="Headphone com Microfone"
        price={119.9}
        imageURL="https://m.media-amazon.com/images/I/71i5jjOyOEL._AC_SL1500_.jpg"
        productName="Mouse sem fio Logitech M280 com Conexão USB e Pilha Inclusa - Preto"
        priceBeforeDiscount={149.9}
      />

      <Card
        title="Webcam HD"
        price={179.9}
        imageURL="https://m.media-amazon.com/images/I/519vmGo5jYL._AC_SL1500_.jpg"
        productName="Mouse sem fio Logitech M280 com Conexão USB e Pilha Inclusa - Preto"
        priceBeforeDiscount={199.9}
      />

      <CheckoutButton onPress={handleCheckout} />
    </Scrollable>
  );
}
