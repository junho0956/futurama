import Inventory from "../pages/inventory";
import Question from "../pages/questions";

interface InfoCreators {
  name: string;
  url: string;
}

export interface InfoData {
  synopsis: string;
  yearsAired: string;
  creators: Array<InfoCreators>,
  id: number;
}

export interface CharacterData {
  age: string;
  name: {
    first: string;
    middle: string;
    last: string;
  }
  images: {
    "head-shot": string;
    main: string; 
  }
  gender: "Male" | "Female";
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: Array<string>;
  id: number;
}

export interface CastData {
  name: string;
  born: string;
  died: string;
  bio: {
    text: string;
    url: string;
  }
  id: number;
}

export interface EpisodesData {
  number: string;
  title: string;
  writers: string;
  originalAirDate: string;
  desc: string;
  id: number;
}

export interface QuestionsData {
  id: number;
  question: string;
  possibleAnswers: Array<string>;
  correctAnswer: string;
}

export interface InventoryData {
  category: string;
  description: string;
  price: number;
  slogan: string;
  stock: number;
  title: string;
  id: number;
}