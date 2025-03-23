import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import CardTransaction from "../CardTransaction";

export default function Transactions (){
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Transações</Text>
          <View style={styles.transactions}>
            <CardTransaction/>
            <CardTransaction/>
            <CardTransaction/>
            <CardTransaction/>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    flexDirection: 'column',
  },
  transactions: {
    flexDirection: 'column',
    gap: 6,
    marginTop: 10
  },
  title: {
    fontSize: 24,
    fontFamily: 'MyCustomFont-Bold',
    color: '#000000',
  },
});