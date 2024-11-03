import { View, Text } from "react-native";
import React from "react";
import Scrollable from "../components/containers/Scrollable";
import HeaderWithTitle from "../components/headers/HeaderWithTitle";
import Card from "../components/containers/Card";
import PriceTag from "../components/checkout/PriceTag";
import CheckoutButton from "../components/checkout/CheckoutButton";
import { router } from "expo-router";

/**
 * index
 * checkout
 * compra
 */

export default function index() {
  const handleCheckout = () => {
    router.push("/checkout")
  }

  return (
    <Scrollable>
      <HeaderWithTitle title="Shopping Cart" />
      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!!
        </Text>
        <PriceTag price={199} />
      </Card>

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!!
        </Text>
        <PriceTag price={199} />

      </Card>

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!!
        </Text>
        <PriceTag price={199} />
      </Card>

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!!
        </Text>
        <PriceTag price={199} />
      </Card>

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!!
        </Text>
        <PriceTag price={199} />
      </Card>

      <CheckoutButton onPress={handleCheckout}/>
    </Scrollable>
  );
}
