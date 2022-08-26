import { Pagination, Stack } from "@mui/material";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import lupa from "../assets/ic_search.png";
import "../styles/Home.css";
import { strings } from "../utils/strings";

export const Home = ({ oompaLoompas, setPage }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event, value) => {
    setPage(value + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const handleChangeFilter = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filterOompas = () => {
    if (search.length) {
      const profession = oompaLoompas.filter((oompa) => {
        return JSON.stringify(oompa.profession)
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });

      const name = oompaLoompas.filter((oompa) => {
        return JSON.stringify(oompa.first_name + " " + oompa.last_name)
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      return (profession, name);
    } else {
      return oompaLoompas;
    }
  };

  const oompas = filterOompas();
  return (
    <div className="home__container">
      <form className="input__container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={handleChangeFilter} />
        <img src={lupa} alt="lupa" className="input__image" />
      </form>

      <h1>{strings.home_title_h1}</h1>
      <h3>{strings.home_title_h3}</h3>

      <div className="oompaLoompas">
        {oompas.map((oompaLoompa) => {
          return (
            <div key={oompaLoompa.id}>
              <div className="oompaLoompa">
                <div
                  style={{
                    backgroundImage: `url(${oompaLoompa.image})`,
                  }}
                  className="oompaLoompa__image"
                ></div>

                <div className="oompaLoompa__description">
                  <Link
                    className="oompaLoompa__description--name"
                    to={`/${oompaLoompa.id}`}
                  >
                    {oompaLoompa.first_name}
                  </Link>
                  <span className="oompaLoompa__description--gender">
                    {oompaLoompa.gender === "F" ? "Female" : "Man"}
                  </span>
                  <span className="oompaLoompa__description--profession">
                    {oompaLoompa.profession}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={10}
          onChange={handleChange}
          variant="outlined"
          color="primary"
          style={{ alignSelf: "center", marginBottom: "50px" }}
        />
      </Stack>
    </div>
  );
};
