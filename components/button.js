import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';


const Button = ({onPress, children, styles }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}> {children} </Text>
		</TouchableOpacity>
	)
}



export default Button