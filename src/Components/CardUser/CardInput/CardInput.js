import { useState } from "react";

//Toggle
import { InputToggle } from "../../ToggleButton/ToggleButton";

//Style
import { Toggle } from "../../Modal/Styles.Modal";
import { InputGroup, Label } from "../Style.CardUser";

function CardInput (props) {
  
  const [focused, setFocused] = useState(false);

  const {
    label,
    onChange,
    id,
    errorMessage,
    ChangeToggleButton,
    toggleButtonOption,
    editData,
    editDataOp,
    onClick,
    ...inputProps
  } = props;

  //Exibir Span ao preencher campo erroneamente
  const showMessage = (e) => {setFocused(true)};

  return (
    <>
      {label === "Prestar serviço ?" ? (
          <Toggle>
              <label className="labelPerfil">Fornecer serviço ?</label>
              {toggleButtonOption === "true" ? (
                  <div>
                    <InputToggle
                      {...inputProps}
                      onChange={onChange}
                      onClick={ChangeToggleButton}
                      editData={editData}
                      defaultChecked
                    />
                    <span>Sim</span>
                  </div>
              ) : (
                  <div>
                    <InputToggle
                      {...inputProps}
                      onChange={onChange}
                      onClick={ChangeToggleButton}
                      editData={editData}
                    />
                    <span>Não</span>
                  </div>
              )}
          </Toggle>
      ) : label === "Senha" ? (
          <InputGroup editDataOp={editDataOp}>
              <label htmlFor={id}>
                {label}
                <span onClick={onClick}>Alterar</span>
              </label>

              {/* <input
                {...inputProps}
                onChange={onChange}
                onBlur={showMessage}
                style={{pointerEvents: "none"}}
                onFocus={() =>
                  inputProps.name === "registerConf_Password" && setFocused(true)
                }
                focused={focused.toString()}
              /> */}

              <span>{errorMessage}</span>
          </InputGroup>
      ) : (
        <InputGroup editData={editData}>
            <label htmlFor={id}>{label}</label>

            <input
              {...inputProps}
              onChange={onChange}
              onBlur={showMessage}

              /*
                Faz com que o campo de confirmação de senha, já informe o span assim que clicar.
                (Evita que esse span só seja exibido ao clicar em enviar)
              */

              onFocus={() =>
                inputProps.name === "registerConf_Password" && setFocused(true)
              }

              focused={focused.toString()}
            />

            <span>{errorMessage}</span>

        </InputGroup>
      )}
    </>
  );
};

export default CardInput;
