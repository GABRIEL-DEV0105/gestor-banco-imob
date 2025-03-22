import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Header (){
    return (
        <View style={styles.container}>
          <FontAwesome name="user-circle-o" size={50} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '30%',
    backgroundColor: '#1937FE',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: '20%',
    borderBottomRightRadius: '20%', 
  },
  texto: {
    color: 'white'
  }
});