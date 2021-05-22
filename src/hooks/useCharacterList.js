import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';

const useCharacterList = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters(page)
          .then(setCharacters)
          .finally(() => setLoading(false));
      }, [page]);

    return { loading, characters, page, setPage };
};

export default useCharacterList;
