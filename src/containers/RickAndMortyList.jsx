import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/characters/Loading';
import useCharacterList from '../hooks/useCharacterList';

const ListComponent = () => {
    const { loading, characters, page, setPage } = useCharacterList();

    return loading ? (
        <Loading />
        ) : (
        <main>
            <button onClick={() => setPage((prevPage) => prevPage + 1)}>
                Page {page}
            </button>
            <CharacterList characters={characters} />
        </main>
    );
};

export default ListComponent;
