import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Badge from '../checkout/Badge';
import { Entypo } from '@expo/vector-icons';


export default function FooterItem({ icon, text, badge }: any) {
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
});