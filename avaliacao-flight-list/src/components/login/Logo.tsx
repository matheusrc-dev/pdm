import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Logo() {
    return (
        <View>
            <Image
                resizeMode='contain'
                style={styles.logo}
                source={require('../../../assets/images/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 325,
    }
})