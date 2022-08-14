import React, { useContext } from "react";

//UseContext
import { UserContext } from "../../App";

//Componentes
import { ProfileContainer, ProfileBG, Delete } from "./Style.Profile";

//Icones
import CardUser from "../../Components/CardUser/CardUser";

//Imagem
import profilePicture from "../../Assets/userdefault.png"

//Axios
import { axiosInstance } from "../../service/axios";
import { useNavigate } from "react-router-dom";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "../../Components/CardUser/Style.CardUser";


function Perfil() {

  const {setIsUserLogado} = useContext(UserContext);

  const notify = (texto) =>
    toast(texto, { toastId: "toastFromDelete" });

  let navigate = useNavigate();

  const deleteAccount = (e) =>{
    e.preventDefault();
    axiosInstance.delete("/api/user/").then((res) =>{
      console.log(res);
      if(res.status === 202){
        localStorage.removeItem("token");
        setIsUserLogado(false);
        navigate("/");
      }else{
        // console.log("Erro: ", res);
        <>{notify("Falha ao deletar sua conta")}</>;
      }
      
    })
}

  return (
    <ProfileContainer>
      <StyledContainer autoClose = {2500} position="top-center"/>
      <ProfileBG>
        <img src={profilePicture} alt="Foto Perfil" />
      </ProfileBG>
      <CardUser />
      <Delete onClick={deleteAccount}>Deletar a conta</Delete>
    </ProfileContainer>
    
  );
}

export default Perfil;
