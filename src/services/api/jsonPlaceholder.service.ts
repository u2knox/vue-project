import axios from "@/services/axios";

export const useJsonPlaceholder = (method: string) => {
  const getItem = async (id: number) => {
    return (await axios(`https://jsonplaceholder.typicode.com/${method}/${id}`)).data
  };
  return { getItem }
}
