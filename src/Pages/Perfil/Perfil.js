import React from "react";

//Componentes
import {ProfileContainer, ProfileBG, ProfileSectionBG} from "./Style.Profile";

//Icones
import { RiUser3Fill } from "react-icons/ri";
import Card from "../../Components/Card/Card";

function Perfil(){

    return (
        <ProfileContainer>
            <ProfileBG>
                <RiUser3Fill/>
            </ProfileBG>
            <Card/>
                
        </ProfileContainer>      
    )
}

export default Perfil;