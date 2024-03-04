
import axios from "axios";

const getToken = async () => {
  try {
    const response = await axios.get("http://localhost:8080/getToken");
    const data = await response.json();
    const token = data.token
    return token
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getToken;
