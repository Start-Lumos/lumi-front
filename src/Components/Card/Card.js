import React, { useState } from "react";
import CardInput from "./CardInput/CardInput";

//CSS
import styles from "./CardUser.module.css";

//Componentes
import {
  Form,
  LeftColumn,
  RightColumn,
  Row,
  ProfileInput,
  Label,
  Span,
  LabelToggle,
  Submit,
  ServicesUser,
  DadosUser,
  Column,
  ProfileSectionBG,
  FormBottom,
} from "./Style.CardUser";

import ChangePassword from "../Modal/Password/ChangePassword/ChangePassword";
import { BrazilianStates } from "../BrazilianStates/BrazilianStates";
import { BrazilianCities } from "../BrazilianCities/BrazilianCities";
import { Select } from "../StyleList/Style.List";

function Card() {
  const [toggleButtonOption, setToggleButtonOption] = useState("false");

  const [sizeP, SetSizeP] = useState("30rem");
  const [sizeS, SetSizeS] = useState("20rem");
  const [sizeM, SetSizeM] = useState("40rem");
  const [dadosSize, SetdadosSize] = useState("100%");

  function ChangeToggleButton(e) {
    if (toggleButtonOption === "true") {
      setToggleButtonOption("false");
      setData({
        ...data,
        [e.target.toggleButton]: (e.target.value = "false"),
      });
      SetSizeP("30rem");
      SetSizeS("20rem");
      SetSizeM("40rem");
      SetdadosSize("100%");
    } else {
      setToggleButtonOption("true");
      setData({
        ...data,
        [e.target.toggleButton]: (e.target.value = "true"),
      });
      SetSizeP("60rem");
      SetSizeS("40rem");
      SetSizeM("80rem");
      SetdadosSize("50%");
    }
  }

  // const [dadosUser, setDadosUser] = useState({
  //   userFirstName: "João",
  //   userLastName: "Medeiros da Silva",
  //   userEmail: "joaomedeirossilva@gmail.com",
  //   userPassword: "Etf#226994",
  //   userCPF: "12345678945",
  //   userDTNasc: "2001-10-12",
  //   userPhone: "81984527891",
  // });

  // const [dadosServ, setDadosServ] = useState({
  //   descricao: "",
  //   modalidade: "",
  // });

  // const [values, setData] = useState({
  //   toggleButton: toggleButtonOption,
  // });

  const [data, setData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userCPF: "",
    userDTNasc: "",
    userPhone: "",
    toggleButton: toggleButtonOption,
  });

  const inputs = [
    {
      id: "userFirstName",
      name: "userFirstName",
      type: "text",
      errorMessage:
        "Nome deve possuir 3-16 caracteres e não pode conter caracteres especiais.",
      label: "Nome",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: "userLastName",
      name: "userLastName",
      type: "text",
      errorMessage:
        "Sobrenome deve possuir 3-45 caracteres e não pode conter caracteres especiais.",
      label: "Sobrenome",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: "userEmail",
      name: "userEmail",
      type: "email",
      errorMessage: "Esse não é um endereço de e-mail válido!",
      label: "E-mail",
      required: true,
    },
    {
      id: "userPassword",
      name: "userPassword",
      type: "password",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Senha",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "userCPF",
      name: "userCPF",
      type: "text",
      errorMessage:
        "O CPF deve conter 11 caracteres, sendo informado apenas os números",
      label: "CPF",
      pattern: "^[0-9]{11}$",
      required: true,
    },
    {
      id: "userDTNasc",
      name: "userDTNasc",
      type: "date",
      errorMessage: "Informe sua data de nascimento",
      label: "Data de Nascimento",
      required: true,
    },
    {
      id: "userPhone",
      name: "userPhone",
      type: "text",
      errorMessage:
        "O telefone deve conter 11 caracteres, sendo informado apenas os números",
      label: "Telefone",
      required: true,
      pattern: "^[0-9]{11}$",
    },
    {
      id: "toggleButton",
      name: "toggleButton",
      type: "checkbox",
      label: "Prestar serviço ?",
    },
  ];

  const [isModalChangePass, setModalChangePass] = useState(false);
  const [editData, setEditData] = useState("none");

  function openModalCP() {
    setModalChangePass(true);
  }

  function closeModalCP() {
    setModalChangePass(false);
  }

  const ActivateData = (e) => {
    e.preventDefault();
    setEditData("auto");
  };

  const DesactivateData = (e) => {
    e.preventDefault(); //Impedindo recarregamento da página ao clicar no botão;
    console.log(data); //Imprimindo valores no console ao enviar os dados;
    // e.preventDefault();
    // setEditData("none");
    // console.log(data);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    /* CSS da página: localStyles.css */

      <ProfileSectionBG sizeP={sizeP} sizeS={sizeS} sizeM={sizeM}>
        <form onSubmit={DesactivateData}>
          {isModalChangePass ? (
            <ChangePassword closeModalCP={closeModalCP} />
          ) : null}

          <aside>
          {inputs.map((input) => (
            <CardInput
              key={input.id}
              {...input}
              value={data[input.name]}
              onChange={onChange}
              ChangeToggleButton={ChangeToggleButton}
              toggleButtonOption={toggleButtonOption}
              editData={editData}
            />
          ))}
          </aside>


          {toggleButtonOption === "true" ? <></> : null}

          <FormBottom>
            {editData === "none"?(
              <Submit onClick={ActivateData}>Editar</Submit>
            ) : (
              <Submit>Salvar</Submit>
            )}
            
          </FormBottom>
        </form>
      </ProfileSectionBG>
  );
}

export default Card;
