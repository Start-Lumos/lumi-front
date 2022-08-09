import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  Container,
  Data,
  Description,
  Main,
  Pictures,
  ProfilePicture,
  Sobre,
} from "./Style.Servico";


import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const nome = "Marcos Aurelio";
const funcao = "Fotógrafo";
const desc =
  "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";
const email = "marcosaurelio@gmail.com";
const phone = "8191234569";

const res = [
  {
    id: 1,
    imagem1: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960',
    imagem2: 'https://blog.nakata.com.br/wp-content/uploads/2020/08/post_thumbnail-1f77e8996174df4fb19587977331de22-780x450.jpg',
    imagem3: 'https://img2.icarros.com/dbimg/imgadicionalnoticia/4/105564_1',
    imagem4: 'https://www.infomoney.com.br/wp-content/uploads/2022/05/carros-de-luxo-e1653484670585.jpg?fit=770%2C446&quality=50&strip=all',
  }

]

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
              <p>
                <span>Email: </span>
                {email}
              </p>
              <p>
                <span>Telefone: </span>
                {phone}
              </p>
            </aside>
          </Data>
        </Sobre>
        <Description>
          <p>{desc}</p>
        </Description>
        {res.map((item) => {
          return (
            <Pictures key={item.id}>
              <CCarousel controls indicators>
                <CCarouselItem>
                  <CImage
                    src={item.imagem1}
                    alt="slide 1"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    src={item.imagem2}
                    alt="slide 2"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    src={item.imagem3}
                    alt="slide 3"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    src={item.imagem4}
                    alt="slide 4"
                  />
                </CCarouselItem>
              </CCarousel>
            </Pictures>
          );
        })}
      </Container>
    </Main>
  );
}

export default Servico;
