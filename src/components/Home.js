import { React } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export const Home = ({oompaLoompas, setPage}) => {


  return (
    <InfiniteScroll
      dataLength={oompaLoompas.length}
      next={() => {
        setPage((page) => page + 1);
      }}
      hasMore={true}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>You have seen it all</b>
        </p>
      }
    >
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
      </div>
    </InfiniteScroll>
  );
};
