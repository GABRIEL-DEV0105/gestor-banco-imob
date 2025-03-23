import React, { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import Header from "../components/Header";
import * as Font from 'expo-font';
import Transactions from "../components/Transactions";
import ButtonTransaction from "../components/ButtonTransaction";

export default function Home () {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'MyCustomFont-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'MyCustomFont-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'MyCustomFont-ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);
  
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

    return (
        <View style={styles.container}>
            <Header/>
            <Transactions/>
            <ButtonTransaction/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 54,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    fontSize: 24,
    fontFamily: 'MyCustomFont-Regular',
  },
});