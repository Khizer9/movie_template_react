import { createContext, useContext, useEffect, useState } from "react";
import { TvShowApi } from "../api";

const TvShowContext = createContext();

export function TvShowProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    TvShowApi().then((res) => {
        setData(res.tv_shows);
        setLoading(true);
      });
  }, []);

  

  return (
    <TvShowContext.Provider value={{ data, loading }}>
      {children}
    </TvShowContext.Provider>
  );
}

export function useTvShow() {
  return useContext(TvShowContext);
}
