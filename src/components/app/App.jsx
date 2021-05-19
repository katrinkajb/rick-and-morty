import React from 'react';
import RickAndMorty from '../../containers/RickAndMorty';
import Loading from '../characters/Loading';
import style from './App.css';

export default function App() {
  return (
    <section className={style.main}>
      <Loading />
      <RickAndMorty />
    </section>
  )
}
