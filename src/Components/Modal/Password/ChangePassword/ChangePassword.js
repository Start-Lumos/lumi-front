import React, { useState } from "react";

//Botão Fechar
import { CgClose } from "react-icons/cg";

//Componentes
import InputFieldCP from "./InputFieldCP/InputFieldCP";
import {
  Backdrop,
  Container,
  FormTop,
  CloseButton,
  Submit,
} from "../../Styles.Modal";

function ChangePassword({ closeModalCP }) {
  const [values, setValues] = useState({
    userPassword: "",
    userNewPassword: "",
    userConfNewPassword: "",
  });

  const inputs = [
    {
      id: "userPassword",
      className: "input",
      type: "password",
      name: "userPassword",
      placeholder: "Informe sua senha antiga",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Senha Antiga",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "userNewPassword",
      className: "input",
      type: "password",
      name: "userNewPassword",
      placeholder: "Informe uma nova senha",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Nova senha",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "userConfNewPassword",
      className: "input",
      type: "password",
      name: "userConfNewPassword",
      placeholder: "Confirme a nova sua senha",
      errorMessage: "As senhas não são iguais!",
      label: "Confirmar nova senha",
      required: true,
      pattern: values.userNewPassword,
    },
  ];

  const sendData = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const changeInputValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Backdrop>
      <Container>
        <form onSubmit={sendData}>
          
          <FormTop>
            <h1>Mudar a senha</h1>
            <CloseButton onClick={closeModalCP}>
              <CgClose />
            </CloseButton>
          </FormTop>

          {inputs.map((input) => (
            <InputFieldCP
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={changeInputValue}
            />
          ))}

          <Submit>Enviar</Submit>

        </form>
      </Container>
    </Backdrop>
  )
}

export default ChangePassword;
