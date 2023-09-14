import axios from "axios";

export const getCatalog = async () => {
  const response = await axios.get(
    "https://648f662f75a96b664445168f.mockapi.io/advert"
  );
  return response.data;
};
