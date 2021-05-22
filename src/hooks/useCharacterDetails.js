import { useState, useEffect } from 'react';
import { getCharacterDetails } from '../services/rickAndMortyApi';

const useCharacterDetails = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterDetails(id)
      .then((character) => setCharacter(character))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return { loading, character };
};

export default useCharacterDetails;
