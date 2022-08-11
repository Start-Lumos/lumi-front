import React, { useState } from "react";

//Icom Fechar
import { CgClose } from "react-icons/cg";

//Validação do CPF
import CPF from "cpf-check";

//Componentes
import InputFieldFP from "./InputFieldFP/InputFieldFP";
import {
  Backdrop,
  Container,
  FormTop,
  CloseButton,
  Submit,
  StyledContainer,
} from "../../Styles.Modal";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgetPassword({ closeModalPass, openModalCode }) {

  const [values, setValues] = useState({
    userEmail: "",
    userCPF: "",
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
      id: "userCPF",
      type: "text",
      name: "userCPF",
      placeholder: "Informe o seu CPF",
      errorMessage:
        "O CPF deve conter 11 caracteres, sendo informado apenas os números",
      label: "CPF",
      pattern: "^[0-9]{11}$",
      required: true,
    },
  ];

  const notify = () => toast("Esse CPF é inválido!", { toastId: "toastFromFP" });

  const sendData = (e) => {
    e.preventDefault();
    if (CPF.validate(values.userCPF) === false) {
      <>{notify()}</>;
    } else {
      console.log(values);
    }
  };

  const changeInputValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Backdrop>
      
      <StyledContainer autoClose={2500} position="top-center" />
      
      <Container>
        <form onSubmit={sendData}>
          
          <FormTop>
            <h1>Recuperar a senha</h1>
            <CloseButton onClick={closeModalPass}>
              <CgClose />
            </CloseButton>
          </FormTop>

          {inputs.map((input) => (
            <InputFieldFP
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={changeInputValue}
            />
          ))}

          <p onClick={openModalCode} style={{ cursor: "pointer" }}>Clicar</p>

          <Submit>Enviar</Submit>
          
        </form>
      </Container>
    </Backdrop>
  );
}

export default ForgetPassword;
