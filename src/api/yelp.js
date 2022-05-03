import axios from "axios";
import apiKeys from "../../api-keys.json";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${apiKeys.yelp}`,
  },
});
