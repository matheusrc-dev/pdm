import React from 'react'
import { Stack, Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        animation: 'ios',
        headerStyle: {
          backgroundColor: '#1d3825',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'serif'
        },
      }} />
  )
}