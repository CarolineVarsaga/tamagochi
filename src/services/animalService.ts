import axios from "axios";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";
const comingFeedTime = 5 * 1000; 



export const get = async <T>(url: string) => {
  return await axios.get<T>(url); 
}; 

export const getAnimal = async (id: number) => {
  return await get(`${BASE_URL}/${id}`);
};

export const formatDate = (date: Date): string => {
  return date.toLocaleString('sv-SE', { 
    year: 'numeric',
    month: 'numeric', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
  });
};

export const calculateDateDifference = (lastFed: string): number => {
  const current = new Date().getTime();
  const lastFedTime = Date.parse(lastFed);

  return current - lastFedTime;
};

export const hungryAnimal = (lastFed: string): boolean => {
  const timeDifference = calculateDateDifference(lastFed);

  return timeDifference > comingFeedTime;
};

// export const nextFeedingTime = (lastFed: string): string => {
//   const lastFedTime = new Date(lastFed);
//   const nextFeedingTime = new Date(lastFedTime.getTime() + comingFeedTime);
//   const formattedTime = formatDate(nextFeedingTime);
  
//   return formattedTime; 
// };