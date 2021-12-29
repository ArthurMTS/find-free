import React from 'react';
import { Box } from '@material-ui/core';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { useStyles } from './Game.styles';

export const Game = () => {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Header />
        <Box className={styles.main}>
          <h2>Imma game!</h2>
        </Box>
      <Footer />
    </React.Fragment>
  );
}