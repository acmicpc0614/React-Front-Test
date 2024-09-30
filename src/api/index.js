import axios from "axios";

export const getDataFromServer = async (setData) => {
  const url =
    process.env.REACT_APP_API_URL ||
    "https://fedskillstest.coalitiontechnologies.workers.dev";
  const username = process.env.REACT_APP_USERNAME || "coalition";
  const password = process.env.REACT_APP_PASSWORD || "skills-test";

  try {
    const response = await axios.get(url, {
      auth: {
        username: username, // Corrected
        password: password, // Corrected
      },
    });
    setData(response.data);
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};
