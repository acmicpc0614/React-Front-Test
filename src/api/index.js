import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");

const headers = {
  Authorization: `Basic ${token}`,
};

axios
  .get(url, { headers })
  .then((response) => {
    console.log("Response data:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
