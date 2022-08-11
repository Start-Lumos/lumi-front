import { useEffect, useState } from "react";
import { fetchStates, parseStates } from "../Helpers/Ibge";
import Dropdown from "../Dropdown";

export const BrazilianStates = ({id, name, onChange, editData}) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates);
  }, []); 

  const dropdownOptions = {
    id: id,
    name: name,
    data: states,
    onChange: onChange
  }

  return (<Dropdown {...dropdownOptions} editData={editData}/>)
};
