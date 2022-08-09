import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Data,
  Description,
  Main,
  Pictures,
  ProfilePicture,
  Sobre,
} from "./Style.Servico";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const nome = "Marcos Aurelio";
const funcao = "Fotógrafo";
const desc =
  "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";
const email = "marcosaurelio@gmail.com";
const phone = "8191234569";

function Servico() {
  const [data, setData] = useState([]);
  const carrossel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/teste.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carrossel.current.offsetWidth);
    carrossel.current.scrollLeft -= carrossel.carrossel.current.offsetWidth;
  }

  const handleLeftClick = (e) =>{
    e.preventDefault();
    console.log(carrossel.current.offsetWidth);
    carrossel.current.scrollLeft += carrossel.carrossel.current.offsetWidth;
  }

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
        <Pictures ref={carrossel}>
          {data.map((item) => {
            return (
              <aside key={item.id}>
                <img 
                  src={item.imagem1}
                  alt=""
                />
                <div>
                  <button onClick={handleLeftClick}>
                    <BsFillArrowLeftCircleFill />
                  </button>
                  <button onClick={handleRightClick}>
                    <BsFillArrowRightCircleFill />
                  </button>
                </div>
              </aside>
            );
          })}
        </Pictures>
      </Container>
    </Main>
  );
}

export default Servico;
