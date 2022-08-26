import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOompaLoompa } from "../features/oompaLoompasSlice";
import "../styles/Details.css";


export const Details = () => {
  const { oompaLoompa } = useSelector((state) => state.oompaLoompas);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOompaLoompa(id));
  }, [dispatch, id]);

  return (
    <div className="details__container">
      <div
        className="details__container--image"
        style={{
          backgroundImage: `url(${oompaLoompa.image})`,
        }}
      />

      <div className="details__container--text">
        <span className="oompaLoompa__description--name">
          {oompaLoompa.first_name + " " + oompaLoompa.last_name}
        </span>

        <span className="oompaLoompa__description--gender">
          {oompaLoompa.gender === "F" ? "Female" : "Man"}
        </span>
        <span className="oompaLoompa__description--profession">
          {oompaLoompa.profession}
        </span>

        <span
          className="oompaLoompa__description--description"
          dangerouslySetInnerHTML={{ __html: oompaLoompa.description }}
        />
      </div>
    </div>
  );
};
