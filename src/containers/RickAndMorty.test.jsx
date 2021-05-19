import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.json(mockCharacter));
    })
)

describe('RickAndMorty Character Container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('tests the RickAndMorty app', () => {
        render(<RickAndMorty />)
    })
})
