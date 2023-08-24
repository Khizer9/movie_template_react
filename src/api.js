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