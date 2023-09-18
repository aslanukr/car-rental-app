import axios from "axios";

export const getCatalog = async (page = 1) => {
  const response = await axios.get(
    `https://648f662f75a96b664445168f.mockapi.io/advert?page=${page}&limit=8`
  );

  return response.data;
};

export const getAllCars = async () => {
  const response = await axios.get(
    `https://648f662f75a96b664445168f.mockapi.io/advert`
  );

  return response.data;
};
