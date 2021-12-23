import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { api } from '../../_config/api';

import { useStyles } from './Home.styles';

type Game = {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  developer: string;
  publisher: string;
  platform: string;
  release_date: string;
  short_description: string;
};

export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const handleRequest = async () => {
      const result = await api.get<Game[]>('games');

      setGames(result.data);
    }

    handleRequest();
  }, []);

  const styles = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Box component='main' className={styles.main}>
        <h2>List of games</h2>
        <ul>
          {
            games.map(game => <li key={game.id}>{game.title}</li>)
          }
        </ul>
      </Box>
      <Footer />
    </React.Fragment>
  );
}