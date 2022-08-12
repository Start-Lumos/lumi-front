import React from "react";

//Componentes
import { ProfileContainer, ProfileBG, Delete } from "./Style.Profile";

//Icones
import CardUser from "../../Components/CardUser/CardUser";

//Imagem
import profilePicture from "../../Assets/userdefault.png"

const deleteAccount = (e) =>{e.preventDefault()}


function Perfil() {
  return (
    <ProfileContainer>
      <ProfileBG>
        <img src={profilePicture} alt="Foto Perfil" />
      </ProfileBG>
      <CardUser />
      <Delete onClick={deleteAccount}>Deletar a conta</Delete>
    </ProfileContainer>
    
  );
}

export default Perfil;
