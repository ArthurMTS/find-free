import React, { useState, useEffect } from 'react';
import { Box, Fab, Link } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GamesList } from './components/GamesList';
import { FilterBar } from './components/FilterBar';

import { api } from '../../_config/api';

import { useStyles } from './Home.styles';

import { Game } from './types';

export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [displayGames, setDisplayGames] = useState<Game[]>([]);

  const styles = useStyles();

  useEffect(() => {
    const handleRequest = async () => {
      const result = await api.get('games');

      setGames(result.data);
      setDisplayGames(result.data);
    }

    handleRequest();
  }, []);

  return (
    <React.Fragment>
      <Header />
      
      <Box component='main' className={styles.main}>
        <FilterBar
          games={games}
          handler={setDisplayGames}
        />

        <GamesList games={displayGames} />

        <Link href='#header' className={styles.link}>
          <Fab color='primary' className={styles.goToStart}>
            <KeyboardArrowUp />
          </Fab>
        </Link>
      </Box>

      <Footer />
    </React.Fragment>
  );
}