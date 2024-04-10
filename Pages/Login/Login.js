import React, { useState, useRef } from "react";
import Auth from "../../Components/Authentication/Auth";
import AuthConfirm from "../../Components/AuthenticationConfirm/AuthConfirm";

export default function Login({ navigation }) {
  const [firstRequestSend, setFirstRequestSend] = useState(false);
  
  const loginWithPhoneNumber = async (phoneNumber) => {
    try {
      console.log("send code to", phoneNumber);
      // отправляем запрос на сервер с номером телефона
      const response = {
        userExists: true, // пользователь существует
      };
      if (response.userExists) {
        setFirstRequestSend(true); // первый запрос отправлен, меняем компонент Auth на AuthConfirm
      } else {
        // выводим ошибку что пользователь не найден или перенаправляем на регистрацию
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };



  return firstRequestSend ?
    <AuthConfirm
      navigation={navigation}
      sendCodeToPhoneNumber={loginWithPhoneNumber}
      bottomBtn={{navigateTo: "Registration", title: "registration"}}
      /> :
    <Auth 
      navigation={navigation}
      bottomBtn={{navigateTo: "Registration", title: "registration"}}
      sendCodeToPhoneNumber={loginWithPhoneNumber} />
  
}

