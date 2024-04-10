import React, { useState } from "react";
import Auth from "../../Components/Authentication/Auth";
import AuthConfirm from "../../Components/AuthenticationConfirm/AuthConfirm";


export default function Registration({ navigation}) {

  const [firstRequestSend, setFirstRequestSend] = useState(false);

  const registrationWithPhoneNumber = (phoneNumber) => {
    try {
        console.log('send code to', phoneNumber);
        // отправляем запрос на сервер с номером телефона
        const response = {
          userNew: true // пользователья не существует
        }
        if(response.userNew) {
          setFirstRequestSend(true); // первый запрос отправлен, меняем компонент Auth на AuthConfirm
        } else {
          // выводим ошибку что пользователь не найден или перенаправляем на регистрацию
        }
    } catch (error) {
        console.log("Error: ", error);
    }
  }

  return firstRequestSend ?
    <AuthConfirm
      navigation={navigation}
      sendCodeToPhoneNumber={registrationWithPhoneNumber}
      bottomBtn={{navigateTo: "Login", title: "login"}}
      /> :
    <Auth 
      navigation={navigation}
      bottomBtn={{navigateTo: "Login", title: "login"}}
      sendCodeToPhoneNumber={registrationWithPhoneNumber} />
}