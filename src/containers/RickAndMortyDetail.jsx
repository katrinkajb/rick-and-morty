import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../components/characters/CharacterDetails';
import Loading from '../components/characters/Loading';
import useCharacterDetails from '../hooks/useCharacterDetails';

const DetailsComponent = () => {
    const { id } = useParams();

    const { loading, character } = useCharacterDetails(id);

    return loading ? (
        <Loading />
    ) : (
        <main>
            <CharacterDetails {...character} />
        </main>
    );
};

export default DetailsComponent;
