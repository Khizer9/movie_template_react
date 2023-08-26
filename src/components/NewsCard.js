import React, { useEffect, useState } from "react";
import { useNewsData } from "../context/NewsContext";

const NewsCard = ({ searchQuery }) => {
  const { data, loading } = useNewsData();
  const [filteredMovie, setFilteredMovie] = useState([]);

  useEffect(() => {
    if (loading && data) {
      const filter = data.filter((res) =>
        res.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovie(filter);
    }
  }, [data, loading, searchQuery]);

  return (
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
      style={{ padding: "20px 70px" }}
    >
      {loading ? (
        filteredMovie.map((res) => (
          <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Office"
              src={res.urlToImage}
              class="absolute inset-0 h-full w-full object-cover"
            />

            <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div class="p-4 sm:p-6">
                <time datetime="2022-10-10" class="block text-xs text-white/90">
                  {res.publishedAt}
                </time>

                <a href="#">
                  <h3 class="mt-0.5 text-lg text-white">{res.title}</h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  {res.description}
                </p>
              </div>
            </div>
          </article>
        ))
      ) : (
        <svg
          style={{ width: "50px" }}
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
  );
};

export default NewsCard;
