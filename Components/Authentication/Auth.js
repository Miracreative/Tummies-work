import React, { useState } from "react";
import { Text, View, SafeAreaView, Image, TextInput, KeyboardAvoidingView, ScrollView, ImageBackground } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { userPhone } from "../../actions";
import BtnButton from "../Button/Button";
import { icons } from "../../constants";
import Header from "../Header/Header";
import styled from "./styles.js";

export default function Auth({ navigation, sendCodeToPhoneNumber, bottomBtn }) {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [valid, setValid] = useState(true);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  // const onChangeDisable = () => {
  //     valid ? setDisable(false) : setDisable(true)
  // }

  return (
    <SafeAreaView style={styled.auth}>
      <ImageBackground
      resizeMode="cover"
        style={{flex:1}}
        source={icons.backRedFull}>
           <Header onPress={() => navigation.goBack()} isButtons={false}/>
          <ScrollView>
            <Image style={styled.image} source={icons.headerName} />
            <Text style={[styled.auth__started, {fontSize: RFValue ( 22,  740)}]}>{t("getStarted")}</Text>
            <Image style={styled.auth__img} source={icons.first} />

            <Text style={[styled.auth__title, {fontSize: RFValue ( 22 ,  740)}]}>Phone number</Text>
            <TextInputMask
              type={"cel-phone"}
              options={{
                maskType: "INTERNATIONAL",
                withDDD: true,
                dddMask: "(971) ",
              }}
              ref={(ref) => (phoneField = ref)}
              style={[styled.auth__input, { borderColor: valid ? "rgba(12, 3, 0, 0.5)" : "#FF0000", marginBottom: valid ? 60 : 39 }, {fontSize: RFValue ( 16 ,  740)}]}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setIsShowKeyboard(false);
                setValid(phoneField.isValid());
                setDisable(phoneField.isValid());
              }}
            />

            {valid ? null : <Text style={[styled.auth__error, {fontSize: RFValue ( 14 ,  740)}]}>Enter the correct phone number</Text>}

          </ScrollView>
          <View style={{ marginBottom: isShowKeyboard ? 5 : 20 }}>
            <BtnButton
              onPress={() => {
                dispatch(userPhone(phoneNumber));
                sendCodeToPhoneNumber(phoneNumber);
              }}
              title={t("continue")}
              buttonStyle={{ backgroundColor: "#F55926", borderWidth: 2, borderColor: "#F55926", opacity: !disable ? 0.7 : 1, pointerEvents: !disable ? "none" : "auto" }}
              textStyle={{ color: "rgba(244, 237, 225, 1)" }}
            />
            <BtnButton onPress={() => navigation.navigate(bottomBtn.navigateTo)} title={t(bottomBtn.title)} buttonStyle={{ marginTop: isShowKeyboard ? 5 : 15, marginBottom: isShowKeyboard ? 5 : 20 }} textStyle={{ color: "black" }} />
          </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
