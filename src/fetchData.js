export const fetchData = async () => {
    const response = await fetch(
      "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas"
    );
    const json = await response.json();
    const oompaLoompas = json.results;
    return oompaLoompas
  };