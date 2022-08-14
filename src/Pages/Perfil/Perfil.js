import React, { useEffect, useState } from "react";

//Componentes
import { ProfileContainer, ProfileBG, Deletebtn } from "./Style.Profile";

//Icones
import CardUser from "../../Components/CardUser/CardUser";

//Imagem
import profilePicture from "../../Assets/userdefault.png"


import { useNavigate } from "react-router-dom";


import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "../../Components/CardUser/Style.CardUser";
import Delete from "../../Components/Modal/Delete";


function Perfil() {

  let navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
        navigate("/");
    }
  }, [navigate]);


//Abrir Fechar: CodeRecover
const [isDeleteOpen, setDeleteOpen] = useState(false);

function openModalDelete(e) {
  e.preventDefault();
  setDeleteOpen(true);
}

function closeModalDelete() {setDeleteOpen(false)}

  return (
    <>
    {isDeleteOpen ? (
        <Delete
          closeModalDelete={closeModalDelete}
        />
      ) : null}
    
    <ProfileContainer>
      <StyledContainer autoClose = {2500} position="top-center"/>
      <ProfileBG>
        <img src={profilePicture} alt="Foto Perfil" />
      </ProfileBG>
      <CardUser />
      <Deletebtn onClick={openModalDelete}>Deletar a conta</Deletebtn>
    </ProfileContainer>
    </>
    
  );
}

export default Perfil;
