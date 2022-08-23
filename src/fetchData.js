export const fetchData = async (page) => {
    const response = await fetch(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
    );
    const json = await response.json();
    const oompaLoompas = json.results;
    return oompaLoompas
  };