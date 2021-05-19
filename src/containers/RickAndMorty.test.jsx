import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';

describe('RickAndMorty Character Container', () => {
    it('tests the RickAndMorty app', () => {
        render(<RickAndMorty />)
    })
})
