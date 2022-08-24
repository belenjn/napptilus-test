import { Pagination, Stack } from "@mui/material";
import { React } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export const Home = ({oompaLoompas, setPage}) => {

  const handleChange = (event, value) => {
    setPage(value + 1);
  };

  

  return (
      <div>
        <div className="oompaLoompas">
          {oompaLoompas.map((oompaLoompa) => {
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
        <Pagination count={10} onChange={handleChange} variant="outlined" color="primary" style={{alignSelf: "center", marginBottom: "50px"}}/>
    </Stack>
      </div>
  );
};
