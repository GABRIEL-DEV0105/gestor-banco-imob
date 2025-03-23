import React from "react";
import { Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonTransaction (){
    return (
      <TouchableOpacity >
        <LinearGradient
        colors={['#4960f9', '#1937fe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}>
            <Text style={styles.subTitle}>Nova Transação</Text>
            <Entypo name="chevron-right" size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingVertical: 24,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 32,
    position: 'absolute',
    transform: [{ translateX: 20 }, { translateY: -0.2 * 600 }],
  },
  title: {
    fontSize: 16,
    fontFamily: 'MyCustomFont-Bold',
    color: '#000000',
  },
  subTitle: {
    width: '80%',
    textAlign: 'center',
    marginLeft: 30,
    fontSize: 18,
    fontFamily: 'MyCustomFont-Regular',
    color: '#fff',
  },
});