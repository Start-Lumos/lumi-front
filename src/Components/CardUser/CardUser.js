import React from "react";
import { useState } from "react";

//CSS
import styles from "./CardUser.module.css";

//Componentes
import {
  Form,
  LeftColumn,
  MiddleColumn,
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
    userToggleOption: "true",
    userCEP: "50610-246",
    userStreet: "Rua Mandacaru",
    userHouseNumber: "248",
    userBairro: "Casa Amarela",
    userCity: "Recife",
    userState: "PE"
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
              editData={editData}
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
      <MiddleColumn>
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





      </MiddleColumn>
      <RightColumn>
        <Row>
          <div className={styles.userCEP}>
            <div className={styles.labelSVG}>
              <Label htmlFor="useruserCEP">Código Postal</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userCEP"
              id="userCEP"
              value={dadosUser.userCEP}
              editData={editData}
              onChange={(e) => {setDadosUser({...dadosUser, userCEP: e.target.value})}}
            />
          </div>
          <div className={styles.userStreet}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userStreet">Rua</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userStreet"
              id="userStreet"
              value={dadosUser.userStreet}
              editData={editData}
              onChange={(e) => {setDadosUser({...dadosUser, userStreet: e.target.value})}}
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userHouseNumber}>
            <div className={styles.labelSVG}>
              <Label htmlFor="useruserCEP">Número</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userHouseNumber"
              id="userHouseNumber"
              value={dadosUser.userHouseNumber}
              editData={editData}
              onChange={(e) => {setDadosUser({...dadosUser, userHouseNumber: e.target.value})}}
            />
          </div>
          <div className={styles.userBairro}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userBairro">Bairro</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userBairro"
              id="userBairro"
              value={dadosUser.userBairro}
              editData={editData}
              onChange={(e) => {setDadosUser({...dadosUser, userBairro: e.target.value})}}
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userCity}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userCity">Cidade</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userCity"
              id="userCity"
              value={dadosUser.userCity}
              editData={editData}
              onChange={(e) => {setDadosUser({...dadosUser, userCity: e.target.value})}}
            />
          </div>
          <div className={styles.userState}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userState">Estado</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userState"
              id="userState"
              value={dadosUser.userState}
              editData={editData}
              onChange={(e) => {setDadosUser({...dadosUser, userState: e.target.value})}}
            />
          </div>
        </Row>
      </RightColumn>
    </Form>
  );
};
