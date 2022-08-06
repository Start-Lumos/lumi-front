import { useEffect, useState } from "react";
import { fetchStates, parseStates } from "../Helpers/ibge";
import { Select } from "../StyleList/Style.List";

export const BrazilianStates = ({onChange = () => {}}) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates);
  }, []); 

//   useEffect(() => {
//     fetchStates().then(parseStates).then((states) => {
//       setStates(states);
//     });
//   }, []); 

  return (
    <Select id="state" name="state" onChange={onChange}>
      <option value="Todo o Brasil">Todo o Brasil</option>
      {states.map((state) => {
        const {value, label} = state;
        return (
            <option key={value} value={value}>{label}</option>
        )
      })}
    </Select>
  );
};
