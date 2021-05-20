import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RickAndMorty from './RickAndMorty';
import mockCharacter from './mockCharacters.json';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.json(mockCharacter));
    })
)

describe('RickAndMorty Character Container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('tests the RickAndMorty app', async () => {
        render(<RickAndMorty />);

        const ul = await screen.findByRole('list', {name: 'characters'});
        expect(ul).toMatchSnapshot();
    })
})
