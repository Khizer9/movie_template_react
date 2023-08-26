import axios from "axios";

export const FetchData = async () => {
    try {
     const response = await axios.get("https://www.omdbapi.com/?s=Batman&apikey=2eee8e6a");
    //  console.log(response, "response");
  
     return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const NewsDataApi = async () => {
    try {
     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f34d3502e8bb4152b75e4e9964e04293')
      return response.data;

    } catch (error) {
      console.log(error);
    }
  } 

  export const TvShowApi = async () => {
    try {
      const response = await axios.get('https://www.episodate.com/api/most-popular?page=1')
      return response.data;
      
    } catch (error) {
      console.log(error);
    }
  }