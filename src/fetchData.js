import { endpoint } from "./env";

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
