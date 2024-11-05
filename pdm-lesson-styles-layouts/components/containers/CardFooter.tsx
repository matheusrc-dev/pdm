import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FooterItem from "./FooterItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DEFAULT_GAP } from "@/constants/globalStyles";

export default function CardFooter() {
  return (
    <View style={styles.cardFooter}>
      <FooterItem
        icon={
          <MaterialCommunityIcons
            name="ticket-percent-outline"
            size={24}
            color="#ec4c2b"
          />
        }
        text="Ver todos os cupons da loja"
        badge="Novo"
      />
      <FooterItem
        icon={
          <MaterialCommunityIcons
            name="truck-outline"
            size={24}
            color="#50978f"
          />
        }
        text="Frete grátis em fretes até R$20,00 para pedidos acima de R$19,00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardFooter: {
    marginTop: DEFAULT_GAP,
  },
});
