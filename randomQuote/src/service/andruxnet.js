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
            "3bbe34c22amsh8e0d441c8b40e5dp137582jsne3af38d7faca",
          "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
