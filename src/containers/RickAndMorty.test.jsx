import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router';
import App from '../components/app/App';

describe('RickAndMorty Character Container', () => {  
    it('tests the RickAndMorty app', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const ul = await screen.findByRole('list', {name: 'characters'});

        return waitFor(() => {
            expect(ul).toMatchSnapshot();
        });
    });
});
