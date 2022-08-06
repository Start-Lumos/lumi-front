import React from "react";
import { useState } from "react";

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
} from "./Style.CardUser";
import ChangePassword from "../Modal/Password/ChangePassword/ChangePassword";


export const CardUser = () => {

  
  //Dados
  const [dadosUser, setDadosUser] = useState({
    userFirstName: "João",
    userLastName: "Medeiros da Silva",
    userEmail: "joaomedeirossilva@gmail.com",
    userPassword: "Etf#226994",
    userCPF: "12345678945",
    userDTNasc: "2001-10-12",
    userPhone: "81984527891",
    userToggleOption: "Sim",
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
    setEditData ("auto");
  }

  const DesactivateData = (e) => {
    e.preventDefault();
    setEditData ("none");
    console.log(dadosUser);
  }

  return (
    <Form>
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
              onChange={(e) => {setDadosUser({...dadosUser, userFirstName: e.target.value})}}
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
              onChange={(e) => {setDadosUser({...dadosUser, userLastName: e.target.value})}}
              
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
              onChange={(e) => {setDadosUser({...dadosUser, userEmail: e.target.value})}}
            />
          </div>
          <div className={styles.userPassword}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userPassword">Senha</Label>
              <Span onClick={openModalCP}>Mudar</Span>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="password"
              name="userPassword"
              id="userPassword"
              value={dadosUser.userPassword}
              readOnly
              onChange={(e) => {setDadosUser({...dadosUser, userPassword: e.target.value})}}
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
              onChange={(e) => {setDadosUser({...dadosUser, userCPF: e.target.value})}}
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
              onChange={(e) => {setDadosUser({...dadosUser, userDTNasc: e.target.value})}}
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
              onChange={(e) => {setDadosUser({...dadosUser, userPhone: e.target.value})}}
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userServ}>
            <Label htmlFor="userOption">Prestar serviço?</Label>
            {dadosUser.userToggleOption === "true" ? (
              <LabelToggle>Sim</LabelToggle>
            ) : (
              <LabelToggle>Não</LabelToggle>
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
      
    </Form>
  );
};
