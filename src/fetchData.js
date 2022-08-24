import { endpoint } from "./env";

export const fetchData = async (page) => {
  const response = await fetch(endpoint + `?page=${page}`);
  const json = await response.json();
  const oompaLoompas = json.results;
  return oompaLoompas;
};

