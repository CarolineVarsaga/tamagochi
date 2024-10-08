import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnmial";
import { get } from "../services/animalService";
import { updateLocalStorage } from "../utils/localStorgageUtils";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

const useAnimals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]); 
  const [fetched, setFetched] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      const response = await get<IAnimal[]>(BASE_URL); 
      const data = response.data; 
      setAnimals(data); 
      updateLocalStorage('animals', JSON.stringify(data)); 
      setFetched(true); 
    } catch (error) {
      console.error('Error fetching data:', error); 
      setError('Error fetching data.')
    }
  };

  const getAnimalsFromStorage = () => {
    const storedAnimals = localStorage.getItem('animals'); 
    if (storedAnimals) {
      try {
        const parsedAnimals = JSON.parse(storedAnimals) as IAnimal[]; 
        setAnimals(parsedAnimals); 
        setFetched(true); 
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
        getData(); 
      }
    } else {
      getData();
    }
  };

  useEffect(() => {
    if (!fetched) {
      getAnimalsFromStorage(); 
    }
  });

  return { animals, error, fetched }
}

export default useAnimals; 