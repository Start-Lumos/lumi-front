import React, { useState } from "react";

//Componentes
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";

//Style
import { Backdrop } from "../Styles.Modal";

function LoginRegister({ closeModalSign, openModalPass }) {
  
  //Modais Login e Register(Cadastro)
  const [isLogin, setIsLogin] = useState(true);

  function setLoginForm() {setIsLogin(true)}
    
  function setRegisterForm() {setIsLogin(false)}

  return (
    <Backdrop>  
      {isLogin ? (
        <LoginModal
          setRegisterForm={setRegisterForm}
          closeModalSign={closeModalSign}
          openModalPass={openModalPass}
        />
      ) : (
        <RegisterModal
          setLoginForm={setLoginForm}
          closeModalSign={closeModalSign}
        />
      )}
    </Backdrop>
  )
}

export default LoginRegister;

