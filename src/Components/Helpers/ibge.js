//https://servicodados.ibge.gov.br/api/v1/localidades/estados

const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";
const responseToJson = (response) => response.json();

const sortByLabelAsc = (a, b) => {
  return a.label.localeCompare(b.label);
};



export const fetchStates = () => {
  const url = `${BASE_URL}/localidades/estados`;
  return fetch(url).then(responseToJson);
};

export const parseStates = (states) => {
  return states
    .map((state) => {
      return { label: state.nome, value: state.sigla };
    })
    .sort(sortByLabelAsc);
};

//https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

export const fetchCitiesForState = (state) => {
  if (!state) return Promise.resolve([]);
  const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
  return fetch(url).then(responseToJson);
};

export const parseCities = (cities) => {
  return cities
    .map((city) => {
      const { id, nome } = city;
      return { label: nome, value: id };
    })
    .sort(sortByLabelAsc);
};
