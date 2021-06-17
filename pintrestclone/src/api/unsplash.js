import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID YMa5GY54tKbX9dxqUrOm263MJDg1Do5_Ta2mYMwjLDQ ",
  },
});
