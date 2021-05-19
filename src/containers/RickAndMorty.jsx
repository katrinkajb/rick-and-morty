import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/characters/Loading';
import { getCharacters } from '../services/rickAndMortyApi';

const RickAndMorty = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) return <Loading />

  return (
    <div>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        Page: {page}
      </button>
      <CharacterList characters={characters} />
    </div>
  );
};

export default RickAndMorty;
