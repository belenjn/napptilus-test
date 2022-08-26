import { endpoint } from "./App";

const day = 1000 * 60 * 60 * 24;

export const fetchData = async (page) => {
  const fetchedKey = `last_fetch_${page}`;
  const dataKey = `data_${page}`;
  const lastFetch = localStorage.getItem(fetchedKey)
    ? new Date(localStorage.getItem(fetchedKey))
    : null;
    
  const today = new Date();
  if (lastFetch && today - lastFetch <= day) {
    return JSON.parse(localStorage.getItem(dataKey));
  }

  const response = await fetch(endpoint + `?page=${page}`);
  const json = await response.json();
  localStorage.setItem(fetchedKey, today.toISOString());
  localStorage.setItem(dataKey, JSON.stringify(json.results));
  return json.results;
};


export const getOompa = async (id) => {
  const fetchedKey = `last_fetch_id_${id}`;
  const dataKey = `data_id_${id}`;
  const lastFetch = localStorage.getItem(fetchedKey)
    ? new Date(localStorage.getItem(fetchedKey))
    : null;

  const today = new Date();
  if (lastFetch && today - lastFetch <= day) {
    return JSON.parse(localStorage.getItem(dataKey));
  }

  const response = await fetch(endpoint + `/${id}`);
  const json = await response.json();
  localStorage.setItem(fetchedKey, today.toISOString());
  localStorage.setItem(dataKey, JSON.stringify(json));
  return json;
};