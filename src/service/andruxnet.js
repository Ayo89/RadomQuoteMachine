import axios from "axios";

export const getQuoteService = async () => {
  try {
    const { data } = await axios.get(
      "https://andruxnet-random-famous-quotes.p.rapidapi.com/",
      {
        params: {
          count: "1",
          cat: "famous",
        },
        headers: {
          "X-RapidAPI-Key":
            import.meta.env.VITE_RAPID_KEY,
          "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
