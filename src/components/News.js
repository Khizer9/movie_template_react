import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import { useNewsData } from "../context/NewsContext";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const News = () => {
  const { data, loading } = useNewsData();
  console.log(data);
  const [filter, setFilter] = useState([]);

  const handleSearch = (query) => {
    const filter = data.filter((news) =>
      news.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilter(filter);
  };

  useEffect(() => {
    if (data) {
      setFilter(data);
    }
  }, [data]);

  return (
    <>
      <Navbar />

      <div className="App">
        <h1
          style={{ marginBottom: "20px", marginTop: "40px", fontSize: "36px" }}
        >
          News
        </h1>

        <Search
          onSearch={handleSearch}
          style={{
            margin: "30px auto",
            borderColor: "gray",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />

        <div style={{ margin: "50px 0px" }} className="movieContainer">
          {loading ? (
            filter.map((news) => (
              <div className="movieItem">
                <img className="movieImg" src={news.urlToImage} alt="newImg" />
                <h2 className="title"><Link to={news.url} target="_blank">{news.title}</Link></h2>
              </div>
            ))
          ) : (
            <svg
              style={{
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
