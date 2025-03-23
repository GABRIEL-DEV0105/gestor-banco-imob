import React, { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ButtonConfirm from "../components/ButtonConfirm";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function NewTransaction() {
  const navigation = useNavigation<NavigationProps>();
  const [value, setValue] = useState("");

  const formatCurrency = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");

    if (numericValue.length === 0) {
      setValue(""); 
      return;
    }

    const formatted = (parseFloat(numericValue) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setValue(formatted);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <LinearGradient
            colors={["#4960f9", "#1937fe"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <View style={styles.back}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <AntDesign name="arrowleft" size={32} color="white" />
              </TouchableOpacity>
              <Text style={styles.title}>Nova Transação</Text>
            </View>
          </LinearGradient>

          <View style={styles.content}>
            <Text style={{
              fontSize: 32,
              fontFamily: "MyCustomFont-Bold",
              color: '#1937fe',
            }}>Digite o Valor:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={formatCurrency}
              placeholder="R$ 0"
            />
          </View>
      </View>
      </TouchableWithoutFeedback>
      <ButtonConfirm/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    minHeight: "20%",
    justifyContent: "space-between",
    padding: 24,
    paddingTop: 54,
    flexDirection: "column",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },
  back: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "MyCustomFont-Bold",
    color: "#fff",
  },
  content: {
    padding: 24,
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 60,
    borderBottomWidth: 3, 
    borderBottomColor: 'rgb(154, 160, 197)',
    paddingHorizontal: 10,
    fontSize: 32,
    textAlign: 'center',
    color: '#000',
  },
});
