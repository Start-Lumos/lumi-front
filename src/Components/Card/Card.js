import React, { useEffect, useState } from "react";
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
  InputGroup,
} from "./Style.CardUser";

import ChangePassword from "../Modal/Password/ChangePassword/ChangePassword";
import { BrazilianStates } from "../Dropdown/BrazilianStates/BrazilianStates";
import { BrazilianCities } from "../Dropdown/BrazilianCities/BrazilianCities";
import { Select } from "../StyleList/Style.List";
import TextCounter from "../TextCounter/TextCounter";

function Card() {
  const [toggleButtonOption, setToggleButtonOption] = useState("false");

  const [sizeP, SetSizeP] = useState("28rem");
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
      SetSizeP("28rem");
      SetSizeS("20rem");
      SetSizeM("40rem");
      SetdadosSize("100%");
    } else {
      setToggleButtonOption("true");
      setData({
        ...data,
        [e.target.toggleButton]: (e.target.value = "true"),
      });
      SetSizeP("56rem");
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

  const [recarregar, setRecarregar] = useState(0);

  useEffect(() => {
    setData({
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPassword: "@123afbrir",
      userCPF: "",
      userDTNasc: "",
      userPhone: "",
      toggleButton: toggleButtonOption,
    });
  }, [recarregar]);

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
  const [editDataOp, setEditDataOp] = useState("auto");

  function openModalCP() {
    setModalChangePass(true);
  }

  function closeModalCP() {
    setModalChangePass(false);
  }

  const ActivateData = (e) => {
    e.preventDefault();
    setEditData("auto");
    setEditDataOp("none");
  };

  const DesactivateData = (e) => {
    e.preventDefault(); //Impedindo recarregamento da página ao clicar no botão;
    console.log(data, formValues); //Imprimindo valores no console ao enviar os dados;
    setEditData("none");
    setEditDataOp("auto");
  };

  const CancelEditData = (e) => {
    e.preventDefault(); //Impedindo recarregamento da página ao clicar no botão;
    setEditData("none");
    setEditDataOp("auto");
    setRecarregar((oldKey) => oldKey + 1);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };




  const [local, setLocal] = useState(false);

  const LocalServico = (value) =>{
    value === "Online" ? setLocal(false) : setLocal(true);
  }

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
              editDataOp={editDataOp}
              onClick={openModalCP}
            />
          ))}
        </aside>

        {toggleButtonOption === "true" ? (
          <aside>
            <InputGroup editData={editData}>
              <label htmlFor="servico">Qual o seu serviço</label>
              <input />
            </InputGroup>

            <TextCounter limit={150} editData={editData} />

            <Label htmlFor="descricao">Forma de serviço</Label>

            <Select name="modalidade" id="modalidade" required onChange={(e)=>LocalServico(e.target.value)} editData={editData}>
              <option value="Online">
                Online
              </option>
              <option value="Presencial">
                Presencial
              </option>
              <option value="Híbrido">
                Híbrido
              </option>
            </Select>

            {local === true ? (
              <>
                <BrazilianStates id="state" name="state" onChange={handleInputChange} editData={editData}/>

                <BrazilianCities id="city" name="city"
                  state={formValues.state}
                  onChange={handleInputChange}
                  editData={editData}
                />
              </>
            ) : null}
          </aside>
        ) : null}

        <FormBottom>
          {editData === "none" ? (
            <>
              <Submit onClick={ActivateData}>Editar</Submit>
              <Submit>Sair</Submit>
            </>
          ) : (
            <>
              <Submit onClick={CancelEditData}>Cancelar</Submit>
              <Submit>Salvar</Submit>
            </>
          )}
        </FormBottom>
      </form>
    </ProfileSectionBG>
  );
}

export default Card;
