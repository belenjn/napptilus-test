import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endpoint } from "../env";
import "../styles/Details.css";

export const Details = () => {
  const { id } = useParams();
  const [oompa, setOompa] = useState({});
  

  useEffect(
    () => async () => {
      const response = await fetch(endpoint + `/${id}`);
      const json = await response.json();
      const oompaLoompa = json;
      setOompa(oompaLoompa);
      return oompaLoompa;
    },
    [id]
  );

  return (
    <div className="details__container">
      <div
        className="details__container--image"
        style={{
          backgroundImage: `url(${oompa.image})`,
        }}
      />

      <div className="details__container--text">
        <span className="oompaLoompa__description--name">
          {oompa.first_name + " " + oompa.last_name}
        </span>

        <span className="oompaLoompa__description--gender">
          {oompa.gender === "F" ? "Female" : "Man"}
        </span>
        <span className="oompaLoompa__description--profession">
          {oompa.profession}
        </span>
        <span className="oompaLoompa__description--description">
          {oompa.description}
        </span>
      </div>
    </div>
  );
};
