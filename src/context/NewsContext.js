import React, { createContext, useContext, useEffect, useState } from "react";
import { NewsDataApi } from "../api";


const NewsContext = createContext();

export function NewsProvider ({children}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      NewsDataApi().then((res) => {
        setData(res.articles)
        setLoading(true)
      })
    }, []);

    return (
        <NewsContext.Provider value={{data, loading}}>
            {children}
        </NewsContext.Provider>
    )
} 

export function useNewsData() {
    return useContext(NewsContext);
}

