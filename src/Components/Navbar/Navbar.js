import { Link } from "react-router-dom";
import { useState } from "react";

//Icones
import { BiSearchAlt } from "react-icons/bi";
import { RiHome6Fill, RiUser3Fill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { CgMenu } from "react-icons/cg";

//Modo escuro
import { ToggleMode } from "../ToggleMode/ToggleMode";

//Componentes
import {
  Container,
  Logo,
  Center,
  Search,
  SearchIcon,
  InputNav,
  NavButtons,
  IconStyle,
  MenuMobileIcon,
} from "./Style.Navbar";

//Componente Menu Mobile
import MenuMobile from "../NavbarMobile/NavbarMobile";

//Modal
import LoginRegister from "../Modal/LoginRegister/LoginRegister";
import ForgetPassword from "../Modal/Password/ForgetPassword/ForgetPassword";
import CodeRecoverPW from "../Modal/Password/CodeRecoverPW/CodeRecoverPW";
import RecoverPassword from "../Modal/Password/RecoverPassword/RecoverPassword";

function Header({ themeToggler, imgsrc, themebutton }) {
  //Abertura e Fechamento do menu para versão mobile

  const [menuMobileIsVisible, setMenuMobileisVisible] = useState(false);

  function openModalMenuMobile() {
    setMenuMobileisVisible(true);
  }

  function closeModalMenuMobile() {
    setMenuMobileisVisible(false);
  }

  //Fechar e abrir Login / Cadastro

  const [isModalSignOpen, setModalSignOpen] = useState(false); //Estado inicial do modal, false, pois inicia-se fechado

  //Função para abertura e fechamento do modal Login/Cad, Função enviada para o componente navbar
  function openModalSign() {
    setModalSignOpen(true);
  }

  //Função enviada para o componente modal
  function closeModalSign() {
    setModalSignOpen(false);
  }

  //Fechar e abrir ForgetPassword

  const [IsModalPassOpen, setModalPassOpen] = useState(false);

  //Função para abertura e fechamento do modal ForgetPassword, Função enviada para o componente Modal.
  function openModalPass(e) {
    e.preventDefault();
    setModalPassOpen(true);
    setModalSignOpen(false);
  }

  //Função enviada para o modal ForgetPassword
  function closeModalPass() {
    setModalPassOpen(false);
  }

  //Fechar e abrir ForgetPassword

  const [IsModalCodeOpen, setModalCodeOpen] = useState(false);

  //Função para abertura e fechamento do modal ForgetPassword, Função enviada para o componente Modal.
  function openModalCode(e) {
    e.preventDefault();
    setModalCodeOpen(true);
    setModalPassOpen(false);
  }

  //Função enviada para o modal ForgetPassword
  function closeModalCode() {
    setModalCodeOpen(false);
  }

  //Fechar e abrir RecoverPassword

  const [IsModalRecoverOpen, setModalRecoverOpen] = useState(false);

  //Função para abertura e fechamento do modal RecoverPassword, Função enviada para o componente ForgetPassword.
  function openModalRecover(e) {
    e.preventDefault();
    setModalRecoverOpen(true);
    setModalCodeOpen(false);
  }

  //Função enviada para o modal RecoverPassword
  function closeModalRecover() {
    setModalRecoverOpen(false);
  }

  return (
    <>
      {isModalSignOpen ? (
        <LoginRegister
          closeModalSign={closeModalSign}
          openModalPass={openModalPass}
        />
      ) : null}

      {IsModalPassOpen ? (
        <ForgetPassword
          closeModalPass={closeModalPass}
          openModalCode={openModalCode}
        />
      ) : null}

      {IsModalCodeOpen ? (
        <CodeRecoverPW
          closeModalCode={closeModalCode}
          openModalRecover={openModalRecover}
        />
      ) : null}

      {IsModalRecoverOpen ? (
        <RecoverPassword closeModalRecover={closeModalRecover} />
      ) : null}

      {menuMobileIsVisible ? (
        <MenuMobile
          closeModalMenuMobile={closeModalMenuMobile}
          menuMobileIsVisible={menuMobileIsVisible}
          themebutton={themebutton}
          themeToggler={themeToggler}
          openModalSign={openModalSign}
        />
      ) : null}

      <Container>
        <Link to="/">
          <Logo src={imgsrc} alt="Logo - Lumi" />
        </Link>

        <Center>
          <ToggleMode theme={themebutton} toggleTheme={themeToggler} />

          <Search>
            <SearchIcon>
              <BiSearchAlt />
            </SearchIcon>

            <InputNav />
          </Search>

          <MenuMobileIcon onClick={openModalMenuMobile}>
            <IconStyle>
              <CgMenu />
            </IconStyle>
          </MenuMobileIcon>
        </Center>

        <NavButtons>
          <Link to="/">
            <IconStyle>
              <RiHome6Fill />
              <span>Início</span>
            </IconStyle>
          </Link>

          <Link to="/equipe">
            <IconStyle>
              <TiGroup />
              <span>Devs</span>
            </IconStyle>
          </Link>

          <IconStyle onClick={openModalSign}>
            <RiUser3Fill />
            <span>Login</span>
          </IconStyle>
        </NavButtons>
      </Container>
    </>
  );
}

export default Header;
