import { useEffect, useState } from "react";
import { fetchCitiesForState, parseCities } from "../Helpers/ibge";
import { Select } from "../StyleList/Style.List";

export const BrazilianCities = ({state, onChange = () => {}}) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesForState(state).then(parseCities).then((cities) => {
      setCities(cities);
    });
  }, [state]);

  return (
    <Select id="city" name="city" onChange={onChange}>
      <option value="Todas as cidades">Todas as cidades</option>
      {cities.map((city) => {
        const { value, label } = city;
        return (
          <option key={value} value={label}>
            {label}
          </option>
        );
      })}
    </Select>
  );
};
