import React, { useState, useRef, useEffect } from "react";
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TextInputMask } from "react-native-masked-text";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { userPhone } from "../../actions";
import BtnButton from "../Button/Button";
import { icons } from "../../constants";
import Header from "../Header/Header";
import styled from "./styles.js";

export default function AuthConfirm({ navigation, sendCodeToPhoneNumber, bottomBtn }) {
  const { t } = useTranslation();
  //   const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState("");
  53;
  const [incorrectCode, setIncorrectCode] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [valid, setValid] = useState(true);
  const [disable, setDisable] = useState(true);
  const [time, setTime] = useState(10);
  const [readySend, setReadySend] = useState(false);
  const intervalRef = useRef(0);
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.userInfo.phone);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (time <= 0) {
        setTime(0);
        setReadySend(true);
        clearInterval(intervalRef.current);
        return () => clearInterval(intervalRef.current);
      }
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  });

  const confirmCode = async () => {
    try {
      // check code
      // go to dashboard
    } catch (error) {
      setIncorrectCode(true);
      console.log("Ivalid code.", error);
    }
  };

  const transformTime = (seconds) => {
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds - min * 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  // const onChangeDisable = () => {
  //     valid ? setDisable(false) : setDisable(true)
  // }

  return (
      <SafeAreaView style={styled.auth}>
        <Header onPress={() => navigation.goBack()} isButtons={false}/>
        <ScrollView
          // behavior={Platform.OS =='ios' ? "padding" : "height"}
          style={{ position: "relative" }}
        >
          <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>Phone number</Text>
          <TextInputMask
            type={"cel-phone"}
            options={{
              maskType: "INTERNATIONAL",
              withDDD: true,
              dddMask: "(971) ",
            }}
            ref={(ref) => (phoneField = ref)}
            style={[styled.input, valid ? { borderColor: " rgba(12, 3, 0, 0.50)" } : { borderColor: "rgba(255, 0, 0, 1)" }]}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={(phoneNumber) => {
              dispatch(userPhone(phoneNumber));
            }}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            onBlur={() => {
              setIsShowKeyboard(false);
              setValid(phoneField.isValid());
              setDisable(phoneField.isValid());
            }}
          />

          {valid ? null : <Text style={[styled.auth__error,{fontSize: RFValue ( 14 ,  740)}]}>Enter the correct phone number</Text>}

          <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>Verification code</Text>
          <TextInput
            style={[styled.input, { textAlign: "center", color: incorrectCode ? "red" : "rgba(12, 3, 0, 1)", borderColor: incorrectCode ? "red" : "rgba(12, 3, 0, 1)" }]}
            keyboardType="numeric"
            value={code}
            onFocus={() => (incorrectCode ? setIncorrectCode(false) : null)}
            onChangeText={(value) => {
              setCode(value);
              value.length > 5 ? setDisable(false) : null;
            }}
          />
          <Text style={[styled.title, { color: "rgba(245, 89, 38, 1)", marginTop: 35 }, {fontSize: RFValue ( 20 ,  740)}]}>The code didn 't come ?</Text>
          <TouchableOpacity
              onPress={() => {
                sendCodeToPhoneNumber(phoneNumber)
                setTime(10);
                setReadySend(false);
              }}
              style={{ pointerEvents: readySend ? "auto" : "none" }}
            >
              <Text style={[styled.roundbtn, {fontSize: RFValue ( 24 ,  740)}]}>{readySend ? "Send again" : transformTime(time)}</Text>
            </TouchableOpacity>
          
        </ScrollView>
        <View style={styled.buttons}>
           
            <BtnButton
              onPress={() => {
                navigation.navigate("Results")
                confirmCode();
              }}
              title={t("logIn")}
              buttonStyle={{ backgroundColor: "#F55926", borderWidth: 2, borderColor: "#F55926", opacity: disable ? 0.7 : 1, pointerEvents: disable ? "none" : "auto" }}
              textStyle={{ color: "rgba(244, 237, 225, 1)" }}
            />
            <BtnButton onPress={() => navigation.navigate(bottomBtn.navigateTo)} title={t(bottomBtn.title)} buttonStyle={{ marginTop: isShowKeyboard ? 5 : 15, marginBottom: isShowKeyboard ? 5 : 20 }} textStyle={{ color: "black" }} />
          </View>
      </SafeAreaView>
  );
}
