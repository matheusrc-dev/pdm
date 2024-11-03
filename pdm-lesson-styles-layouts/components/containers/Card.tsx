import { View, Text, StyleSheet, Image } from "react-native";
import React, { ReactNode, useState } from "react";
import Checkbox from "expo-checkbox";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "@/constants/globalStyles";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import PriceTag from "../checkout/PriceTag";
import Badge from "../checkout/Badge";

type CardProps = {
  title: string;
  imageUrl: string;
  productName: string;
  price: number;
  priceBeforeDiscount?: number;
};

export default function Card({
  title,
  imageUrl,
  productName,
  price,
  priceBeforeDiscount,
}: CardProps) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <CardHeader title={title} />
      <CardBody
        isChecked={isChecked}
        setChecked={setChecked}
        imageUrl={imageUrl}
        productName={productName}
        price={price}
        priceBeforeDiscount={priceBeforeDiscount}
      />
      <View style={styles.divider} />
      <CardFooter />
    </View>
  );
}

function CardHeader({ title }: { title: string }) {
  return (
    <View style={styles.cardHeader}>
      <Badge text="Indicado" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

function CardBody({
  isChecked,
  setChecked,
  imageUrl,
  productName,
  price,
  priceBeforeDiscount,
}: any) {
  return (
    <View style={styles.cardBody}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color="#ec4c2b"
      />
      <Image
        style={styles.productImage}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
      <View style={styles.productInfo}>
        <View>
          <Text numberOfLines={1}>{productName}</Text>
          <Text style={styles.freeShippingBadge}>
            <Text style={styles.iconBadge}>
              <FontAwesome5 name="plane" size={12} color="#fff" />
            </Text>
            <Text>FRETE GRÁTIS Acima de R$19</Text>
          </Text>
        </View>
        <PriceTag price={price} priceBeforeDiscount={priceBeforeDiscount} />
      </View>
    </View>
  );
}

function CardFooter() {
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

function FooterItem({ icon, text, badge }: any) {
  return (
    <View style={styles.footerInfo}>
      <View style={styles.footerItem}>
        {icon}
        <Text style={styles.footerText}>{text}</Text>
      </View>
      <View style={styles.footerItemRight}>
        {badge && <Badge text={badge} />}
        <Entypo name="chevron-small-right" size={24} color="#bcbcbc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: DEFAULT_RADIUS,
    padding: DEFAULT_PADDING,
    width: "100%",
    gap: DEFAULT_GAP,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cardHeader: {
    flexDirection: "row",
    gap: 8,
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "#f1f1f1",
    marginHorizontal: -DEFAULT_PADDING,
  },
  cardFooter: {
    marginTop: DEFAULT_GAP,
  },
  checkbox: {
    margin: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
    height: 100,
  },
  freeShippingBadge: {
    backgroundColor: "#143666",
    color: "#fff",
    fontSize: 12,
  },
  footerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  footerItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerItemRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerText: {
    flex: 1,
  },
  iconBadge: {
    backgroundColor: "#448d7c",
  },
});
