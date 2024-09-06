import { IAnimal } from "../models/IAnmial";

export const updateLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getAnimalsFromLocalStorage = (): IAnimal[] => {
  const storedAnimals = localStorage.getItem("animals");
  return storedAnimals ? JSON.parse(storedAnimals) : null; 
}