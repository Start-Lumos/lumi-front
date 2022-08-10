import { useState } from "react";
import { InputToggle } from "../../ToggleButton/ToggleButton";
import { Toggle } from "../../Modal/Styles.Modal";
import { InputGroup } from "../Style.CardUser";

const CardInput = (props) => {
  const [focused, setFocused] = useState(false);

  const {
    label,
    onChange,
    id,
    errorMessage,
    ChangeToggleButton,
    toggleButtonOption,
    editData,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  /*
  
    Se o label (atributo do input), for igual a "Prestar serviço ?" (definimos esse label no input do Toggle
    em RegisterModal), entrará na condição e exibirá o Toggle button. Caso não, exibirá os campos dos inputs, definidos anteriormente em RegisterModal, dentro da const inputs.

    *Essa verificação ocorre para cada campo, mas apenas o toggle possui esse valor em label
  */

  return (
    <>
      {label === "Prestar serviço ?" ? (
        <Toggle>
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
      ) : (
        <InputGroup editData={editData}>
          {/* Exibindo o label correspondente para cada input */}
          <label htmlFor={id}>{label}</label>

          <input
            //Recebe todas as demais props
            {...inputProps}
            //Chama a função que seta os valores informados pelo usuário no seu respectivo input, função essa em (RegisterModal)
            onChange={onChange}
            //Chama a função handleFocus, localizado logo acima dessa página.
            onBlur={handleFocus}
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
