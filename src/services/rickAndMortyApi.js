import { CharacterDetail } from "./utils";

export const getCharacters = async (page) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const { results } = await res.json();
  
    return results;
};

export const getCharacterDetails = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();
  const results = CharacterDetail(json);
    
  return results;
}
