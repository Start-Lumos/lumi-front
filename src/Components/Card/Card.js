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
} from "./Style.CardUser";

import ChangePassword from "../Modal/Password/ChangePassword/ChangePassword";
import { ProfileSectionBG } from "../../Pages/Perfil/Style.Profile";
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
      setValues({
        ...values,
        [e.target.toggleButton]: (e.target.value = "false"),
      });
      SetSizeP("30rem");
      SetSizeS("20rem");
      SetSizeM("40rem");
      SetdadosSize("100%");
    } else {
      setToggleButtonOption("true");
      setValues({
        ...values,
        [e.target.toggleButton]: (e.target.value = "true"),
      });
      SetSizeP("60rem");
      SetSizeS("40rem");
      SetSizeM("80rem");
      SetdadosSize("50%");
    }
  }

  // -----------------------------------------------------------------------

  //Verificação dos campos do formulário:

  //Dados
  const [dadosUser, setDadosUser] = useState({
    userFirstName: "João",
    userLastName: "Medeiros da Silva",
    userEmail: "joaomedeirossilva@gmail.com",
    userPassword: "Etf#226994",
    userCPF: "12345678945",
    userDTNasc: "2001-10-12",
    userPhone: "81984527891",
  });

  const [dadosServ, setDadosServ] = useState({
    descricao: "",
    modalidade: "",
  });

  const [values, setValues] = useState({
    toggleButton: toggleButtonOption,
  });

  //Abertura e fechamento da mudançade senha

  const [isModalChangePass, setModalChangePass] = useState(false); //Estado inicial do modal, false, pois inicia-se fechado
  const [editData, setEditData] = useState("none");

  //Função para abertura e fechamento do modal Mudar Senha, Função enviada para o componente navbar
  function openModalCP() {
    setModalChangePass(true);
  }

  //Função enviada para o componente modal
  function closeModalCP() {
    setModalChangePass(false);
  }

  const ActivateData = (e) => {
    e.preventDefault();
    setEditData("auto");
  };

  const DesactivateData = (e) => {
    e.preventDefault();
    setEditData("none");

    console.log(values, dadosUser, formValues, dadosServ);
  };

  // -----------------------------------------------------------------------

  //Configurando os atributos de cada Input, a partir do seu id:

  const inputs = [
    {
      //toggleButton
      id: "toggleButton",
      name: "toggleButton",
      type: "checkbox",
      label: "Prestar serviço ?",
    },
  ];

  // -----------------------------------------------------------------------

  // Função chamada ao Submit do formulário:

  const handleSubmit = (e) => {
    e.preventDefault(); //Impedindo recarregamento da página ao clicar no botão;
    console.log(values); //Imprimindo valores no console ao enviar os dados;
  };

  // -----------------------------------------------------------------------

  // Função para setar os valores informados pelo usuário no seu respectivo input:

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // ----------------------------------------------------------------------

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    /* CSS da página: localStyles.css */

    <ProfileSectionBG sizeP={sizeP} sizeS={sizeS} sizeM={sizeM}>
      <Form>
        <DadosUser dadosSize={dadosSize}>
          {isModalChangePass ? (
            <ChangePassword closeModalCP={closeModalCP} />
          ) : null}

          <LeftColumn>
            <Row>
              <div className={styles.userFirstName}>
                <div className={styles.labelSVG}>
                  <Label htmlFor="userFirstName">Nome</Label>
                </div>
                <ProfileInput
                  className={styles.userInput}
                  type="text"
                  name="userFirstName"
                  id="userFirstName"
                  value={dadosUser.userFirstName}
                  editData={editData}
                  onChange={(e) => {
                    setDadosUser({
                      ...dadosUser,
                      userFirstName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className={styles.userLastName}>
                <div className={styles.labelSVG}>
                  <Label htmlFor="userLastName">Sobrenome</Label>
                </div>
                <ProfileInput
                  className={styles.userInput}
                  type="text"
                  name="userLastName"
                  id="userLastName"
                  value={dadosUser.userLastName}
                  editData={editData}
                  onChange={(e) => {
                    setDadosUser({
                      ...dadosUser,
                      userLastName: e.target.value,
                    });
                  }}
                />
              </div>
            </Row>
            <Row>
              <div className={styles.userEmail}>
                <div className={styles.labelSVG}>
                  <Label htmlFor="userEmail">Email</Label>
                </div>
                <ProfileInput
                  className={styles.userInput}
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  value={dadosUser.userEmail}
                  editData={editData}
                  onChange={(e) => {
                    setDadosUser({ ...dadosUser, userEmail: e.target.value });
                  }}
                />
              </div>
              <div className={styles.userPassword}>
                <div className={styles.labelSVG}>
                  <Label htmlFor="userPassword">Senha</Label>
                  <Span onClick={openModalCP}>Alterar</Span>
                </div>
                <ProfileInput
                  className={styles.userInput}
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  value={dadosUser.userPassword}
                  readOnly
                  onChange={(e) => {
                    setDadosUser({
                      ...dadosUser,
                      userPassword: e.target.value,
                    });
                  }}
                />
              </div>
            </Row>
            <Row>
              <div className={styles.userCPF}>
                <div className={styles.labelSVG}>
                  <Label htmlFor="userCPF">CPF</Label>
                </div>
                <ProfileInput
                  className={styles.userInput}
                  type="text"
                  name="userCPF"
                  id="userCPF"
                  value={dadosUser.userCPF}
                  editData={editData}
                  onChange={(e) => {
                    setDadosUser({ ...dadosUser, userCPF: e.target.value });
                  }}
                />
              </div>
              <div className={styles.userDTNasc}>
                <div className={styles.labelSVG}>
                  <Label htmlFor="userDTNasc">Data de Nascimento</Label>
                </div>
                <ProfileInput
                  className={styles.userInput}
                  type="date"
                  name="userDTNasc"
                  id="userDTNasc"
                  value={dadosUser.userDTNasc}
                  editData={editData}
                  onChange={(e) => {
                    setDadosUser({ ...dadosUser, userDTNasc: e.target.value });
                  }}
                />
              </div>
            </Row>
          </LeftColumn>
          <RightColumn>
            <Row>
              <div className={styles.userPhone}>
                <div className={styles.labelSVG}>
                  <Label htmlFor="userPhone">Telefone</Label>
                </div>
                <ProfileInput
                  className={styles.userInput}
                  type="text"
                  name="userPhone"
                  id="userPhone"
                  value={dadosUser.userPhone}
                  editData={editData}
                  onChange={(e) => {
                    setDadosUser({ ...dadosUser, userPhone: e.target.value });
                  }}
                />
              </div>
            </Row>

            <Row>
              <div className={styles.userServ}>
                <Label htmlFor="userOption">Prestar serviço?</Label>
                {editData === "none" ? (
                  toggleButtonOption === "true" ? (
                    <LabelToggle>Sim</LabelToggle>
                  ) : (
                    <LabelToggle>Não</LabelToggle>
                  )
                ) : (
                  <aside>
                    {inputs.map((input) => (
                      <CardInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                        ChangeToggleButton={ChangeToggleButton}
                        toggleButtonOption={toggleButtonOption}
                      />
                    ))}
                  </aside>
                )}
              </div>
            </Row>

            <Row>
              {editData === "none" ? (
                <Submit onClick={ActivateData}>Editar</Submit>
              ) : (
                <Submit onClick={DesactivateData}>Salvar</Submit>
              )}
            </Row>
          </RightColumn>
        </DadosUser>

        {toggleButtonOption === "true" ? (
          <ServicesUser>
            <LeftColumn>
              <Column>
                <div className={styles.labelSVG}>
                    <Label htmlFor="descricao">Forma de serviço</Label>
                </div>
                <Row>
                  <Select name="modalidade" id="modalidade" required>
                    <option value="Online">Online</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Híbrido">Híbrido</option>
                  </Select>
                  <BrazilianStates onChange={handleInputChange} />
                  <BrazilianCities
                    state={formValues.state}
                    onChange={handleInputChange}
                  />
                </Row>
              </Column>
              <Column>
                <Row>
                  <div className={styles.userDesc}>
                    <div className={styles.labelSVG}>
                      <Label htmlFor="descricao">Descreva seu serviço</Label>
                    </div>
                    <ProfileInput
                      className={styles.userInput}
                      style={{ height: "10rem" }}
                      type="text"
                      name="descricao"
                      id="descricao"
                      value={dadosServ.descricao}
                      editData={editData}
                      onChange={(e) => {
                        setDadosServ({
                          ...dadosServ,
                          descricao: e.target.value,
                        });
                      }}
                    />
                  </div>
                </Row>
              </Column>
            </LeftColumn>

            <RightColumn>
              <Row>
                <div className={styles.userPhone}>
                  <div className={styles.labelSVG}>
                    <Label htmlFor="userPhone">Telefone</Label>
                  </div>
                  <ProfileInput
                    className={styles.userInput}
                    type="text"
                    name="userPhone"
                    id="userPhone"
                    value={dadosUser.userPhone}
                    editData={editData}
                    onChange={(e) => {
                      setDadosUser({ ...dadosUser, userPhone: e.target.value });
                    }}
                  />
                </div>
              </Row>
            </RightColumn>
          </ServicesUser>
        ) : null}
      </Form>
    </ProfileSectionBG>
  );
}

export default Card;
