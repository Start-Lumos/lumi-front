import { useState } from "react";

//Botão Toggle
import {InputToggle} from "../../../../ToggleButton/ToggleButton"

//Style
import { InputGroup, Toggle } from "../../../Styles.Modal";

function InputFieldReg (props) {

  const [focused, setFocused] = useState(false);

  const {
    label,
    onChange,
    id,
    errorMessage,
    ChangeToggleButton,
    toggleButtonOption,
    ...inputProps
  } = props;
  
  //Exibir Span ao preencher campo erroneamente
  const showMessage = (e) => {setFocused(true)};

  return label === "Prestar serviço ?" ? (
    
    <Toggle>
      
      <label htmlFor="toggleButton">Prestar serviço?</label>

        {toggleButtonOption==="true" ? (
          <div>
            <InputToggle
              {...inputProps}
              onChange={onChange}
              onClick={ChangeToggleButton}
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
            />
            
            <span className="regSpanOption">Não</span>
          </div>
        )}

    </Toggle>

  ) : (
    
    <InputGroup>

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
  );
};

export default InputFieldReg;
