import React, { useState } from "react";

//Axios
import { axiosInstance } from "../../../../service/axios";

//Link
import { Link } from "react-router-dom";

//Botão Fechar
import { CgClose } from "react-icons/cg";

//Componentes
import InputFieldLog from "./InputFieldLog/InputFieldLog";

//Style
import {
  Container,
  FormTop,
  CloseButton,
  Submit,
  Esqueciasenha,
  ChangePage,
} from "../../Styles.Modal";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginModal({ setRegisterForm, closeModalSign, openModalPass, setIsUserLogado }) {

  const [values, setValues] = useState({
    userEmail: "",
    userPassword: "",
  });

  const inputs = [
    {
      id: "userEmail",
      type: "email",
      name: "userEmail",
      placeholder: "Informe o seu e-mail",
      errorMessage: "Esse não é um endereço de e-mail válido!",
      label: "E-mail",
      required: true,
    },
    {
      id: "userPassword",
      type: "password",
      name: "userPassword",
      placeholder: "Informe a sua senha",
      label: "Senha",
      required: true,
      errorMessage: "Essa senha não corresponde aos padrões de cadastro.",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
  ];

  const notify = (texto) =>
    toast(texto, { toastId: "toastFromRG" });

  const sendData = (e) => {
    e.preventDefault();
    axiosInstance.post("/auth/login", values).then((res)=>{
      if(res.status === 202){
        closeModalSign();
        console.log("Logado com sucesso!")
        setIsUserLogado(true);
        localStorage.setItem("token", res.data.token)
      }else{
        <>{notify("Usuário não cadastrado")}</>
      }
    })
  };

  const changeInputValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <form onSubmit={sendData}>

        <FormTop>
          <h1>Login</h1>
          <CloseButton onClick={closeModalSign}>
            <CgClose />
          </CloseButton>
        </FormTop>

        {inputs.map((input) => (
          <InputFieldLog
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={changeInputValue}
          />
        ))}

        <Esqueciasenha onClick={openModalPass}>Esqueci a senha</Esqueciasenha>
        
        <Link to="/perfil">
          <p>Clicar</p>
        </Link>

        <Submit>Login</Submit>
        <p>Ainda não tem uma conta?</p>
        
        <ChangePage onClick={setRegisterForm}>
          Cadastre-se
        </ChangePage>
        
      </form>
    </Container>
  );
}

export default LoginModal;
