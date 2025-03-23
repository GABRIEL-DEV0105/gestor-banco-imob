import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function Header (){
  const [visible, setVisible] = useState(true)
  const [balance, setBalance] = useState(2558000)

  function handleShowBalance(){
    const visibleOn = <AntDesign name="eye" size={24} color="white" />
    const visibleOff = <Feather name="eye-off" size={24} color="white" />
    return (
      visible ? visibleOn : visibleOff
    )
  }
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
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>Saldo Atual</Text>
              <Text style={styles.balance}>
                R$ {visible ? balance.toLocaleString('pt-BR') : '•••••••'}</Text>
            </View>
            <TouchableOpacity 
            onPress={() => setVisible(!visible)} 
            style={{marginBottom: 8, marginLeft: 8}}>
              {handleShowBalance()}
            </TouchableOpacity>
          </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '30%',
    justifyContent: 'space-between',
    padding: 24,
    flexDirection: 'column',
    borderBottomLeftRadius: '20%',
    borderBottomRightRadius: '20%', 
    overflow: 'hidden',
    paddingTop: 54,

  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  balanceContainer: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
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
    minWidth: '70%'
  },
});