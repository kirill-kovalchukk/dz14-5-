import axios from "axios";

const API_KEY = "51972421-790f08ba986d01fd32d1cbe2c";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12,
      page: page,
    },
  });

  return response.data.hits;
};