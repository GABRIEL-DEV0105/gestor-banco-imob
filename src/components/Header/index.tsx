import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function Header (){
    return (
        <LinearGradient
        colors={['#4960f9', '#1937fe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}>
          <View style={styles.icon}>
            <Text style={styles.title}>Imobank</Text>
            <FontAwesome name="user-circle-o" size={50} color="white" />
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.title}>Saldo Atual</Text>
            <Text style={styles.balance}>R$ 3.452.150,00</Text>
          </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '25%',
    justifyContent: 'space-between',
    padding: 24,
    flexDirection: 'column',
    borderBottomLeftRadius: '20%',
    borderBottomRightRadius: '20%', 
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  balanceContainer: {
    marginLeft: 12
  },
  texto: {
    color: 'white'
  },
  title: {
    fontSize: 24,
    fontFamily: 'MyCustomFont-Bold',
    color: '#fff',
  },
  balance: {
    fontSize: 38,
    fontFamily: 'MyCustomFont-Regular',
    color: '#fff',
  },
  ddd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});