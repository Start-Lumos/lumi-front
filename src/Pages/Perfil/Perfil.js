import React from "react";

//Componentes
import { ProfileContainer, ProfileBG } from "./Style.Profile";

//Icones
import { RiUser3Fill } from "react-icons/ri";
import CardUser from "../../Components/CardUser/CardUser";

function Perfil() {
  return (
    <ProfileContainer>
      <ProfileBG>
        <RiUser3Fill />
      </ProfileBG>
      <CardUser />
    </ProfileContainer>
  );
}

export default Perfil;
