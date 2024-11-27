import { Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Logo() {
	return (
		<Image
			resizeMode='contain'
			style={styles.logo}
			source={{ uri: 'https://drive.google.com/u/1/drive-viewer/AKGpihZx6Zq-o4FWOIDyUgBPSwbZiD1zZvQabRQAj1b1bUXowJJR0gEt3xhiduNqnHZXADxqZEOjfVv1Az3mqB_t2NSVD_rFZJ9Xb6s=s2560' }}
		/>
	)
}

const styles = StyleSheet.create({
	logo: {
		height: 90,
		width: 325
	}
})