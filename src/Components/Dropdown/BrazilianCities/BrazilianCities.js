import { useEffect, useState } from "react";
import { fetchCitiesForState, parseCities } from "../Helpers/ibge";
import Dropdown from "../Dropdown";

export const BrazilianCities = ({state, id, name, onChange, editData}) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesForState(state).then(parseCities).then((cities) => {
      setCities(cities);
    });
  }, [state]);

  const dropdownOptions = {
    id: id,
    name: name,
    data: cities,
    onChange: onChange
  }

  return (<Dropdown {...dropdownOptions} editData={editData}/>)
};
