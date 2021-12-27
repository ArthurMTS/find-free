import React, { useState, useEffect } from 'react';
import { Box, Fab, Link } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GamesList } from './components/GamesList';

import { api } from '../../_config/api';

import { useStyles } from './Home.styles';

export const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const handleRequest = async () => {
      const result = await api.get('games');

      setGames(result.data);
    }

    handleRequest();
  }, []);

  const styles = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Box component='main' className={styles.main}>
        <GamesList games={games} />

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