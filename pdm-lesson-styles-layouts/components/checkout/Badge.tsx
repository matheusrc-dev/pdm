import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type BadgeProps = {
  text: string
}

export default function Badge({ text }: BadgeProps) {
  return (
    <Text style={styles.badge}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#ec4c2b",
    color: "#fff",
    borderRadius: 4,
    paddingHorizontal: 6,
    fontSize: 12,
    alignSelf: 'center'
  }
})