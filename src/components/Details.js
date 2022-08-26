import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endpoint } from "../env";
import "../styles/Details.css";

export const Details = () => {
  const { id } = useParams();
  const [oompa, setOompa] = useState({});

  const day = 1000 * 60 * 60 * 24;

  useEffect(
    () => async () => {
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
      setOompa(json);
      return json;
    },
    [day, id]
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

        <span
          className="oompaLoompa__description--description"
          dangerouslySetInnerHTML={{ __html: oompa.description }}
        />
      </div>
    </div>
  );
};
