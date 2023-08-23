import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Movies</h1>

      {data.map((data) => {
        return <div className="main">
            <img src={data.Poster} alt={data.Title}/>
            <h1>{data.Title}</h1>
        </div>;
      })}
    </div>
  );
};

export default Movies;
