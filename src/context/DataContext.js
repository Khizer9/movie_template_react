import React, { createContext, useContext, useEffect, useState } from "react";
import { FetchData } from "../api";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    FetchData().then((response) => {
        setData(response.Search);
        setLoading(true)
    })
  }, []);

  return (
    <DataContext.Provider value={{data, loading}}>
        {children}
    </DataContext.Provider>
  )

}

export function useData() {
    return useContext(DataContext);
}
