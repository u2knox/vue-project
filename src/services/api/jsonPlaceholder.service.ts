import axios from "@/services/axios";

const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

export const useJsonPlaceholder = (type: string) => {
  const getItem = async (id: number) => {
    return (await axios(`${BASE_URL}/${type}/${id}`)).data
  };
  const getItems = async (limit: number) => {
    return (await axios(`${BASE_URL}/${type}?_limit=${limit}`)).data
  };
  const addItem = async (obj: Object) => {
    return await axios.post(`${BASE_URL}/${type}`, obj)
  };
  return { getItem, getItems, addItem }
}
