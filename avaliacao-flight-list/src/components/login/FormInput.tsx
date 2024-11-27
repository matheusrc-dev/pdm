import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TextInputProps,
} from "react-native";
import React from "react";

type FormInputProps = {
	error?: string;
} & TextInputProps;

export default function FormInput({ error, ...rest }: FormInputProps) {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} {...rest} />
			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 8,
		marginVertical: 16,
		width: "100%"
	},
	input: {
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 8,
		padding: 8,
		height: 48,
	},
	label: {
		color: "#0088A3",
		fontWeight: "bold",
	},
	error: {
		color: "red",
		fontSize: 12,
	},
});