import React from "react";
import {
  Container,
  Data,
  Description,
  Main,
  Pictures,
  ProfilePicture,
  Sobre,
} from "./Style.Servico";

const nome = "Marcos Aurelio";
const funcao = "Fotógrafo";
const desc =
  "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";
const email = "marcosaurelio@gmail.com";
const phone = "8191234569"

function Servico() {
  return (
    <Main>
      <Container>
        <Sobre>
          <ProfilePicture />
          <Data>
            <aside>
              <h2>{nome}</h2>
              <span>{funcao}</span>
            </aside>
            <aside>
                <h2>Contato:</h2>
                <p><span>Email: </span>{email}</p>
                <p><span>Telefone: </span>{phone}</p>
            </aside>
          </Data>
        </Sobre>
        <Description>
            <p>{desc}</p>
        </Description>
        <Pictures />
      </Container>
    </Main>
  );
}

export default Servico;
