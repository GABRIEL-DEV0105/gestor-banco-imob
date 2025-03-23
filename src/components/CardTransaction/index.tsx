import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function CardTransaction (){
    return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
              <FontAwesome name="home" size={32} color="black" />
            <View style={{flexDirection: 'column', marginLeft: 8}}>
              <Text style={styles.title}>Shopping</Text>
              <Text style={styles.subTitle}>24 November 2021, 8:20 PM</Text>
            </View>
          </View>
            <Text style={styles.subTitle}>R$ 534,55</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontFamily: 'MyCustomFont-Bold',
    color: '#000000',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'MyCustomFont-Regular',
    color: '#000000',
  },
});