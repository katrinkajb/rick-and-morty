export const CharacterDetail = (character) => {
    return {
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image,
        origin: character.origin,
        location: character.location
    };    
};
