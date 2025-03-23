import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardBalance (){
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Saldo Atual</Text>
          <Text style={styles.balance}>R$ 3.452.150,00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '20%',
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
    borderRadius: '15%',
    position: 'absolute',
    zIndex: 99,
    top: '55%',
    left: '40%',
    transform: [{ translateX: -0.4 * 300 }, { translateY: -0.3 * 600 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  title: {
    fontSize: 24,
    fontFamily: 'MyCustomFont-Bold',
    color: '#333',
  },
  balance: {
    fontSize: 38,
    fontFamily: 'MyCustomFont-Regular',
    color: '#333',
  }
});