import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function ButtonConfirm (){
  const navigation = useNavigation<NavigationProps>();

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <LinearGradient
        colors={['#4960f9', '#1937fe']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}>
          <Text style={styles.subTitle}>Confirmar</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingVertical: 24,
    paddingHorizontal: 8,
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
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'MyCustomFont-Regular',
    color: '#fff',
  },
});