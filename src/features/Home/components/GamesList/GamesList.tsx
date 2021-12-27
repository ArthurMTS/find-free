import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

import { GameCard } from '../GameCard';

import { useStyles } from './GamesList.styles';

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

type GamesListProps = {
  games: Game[];
}

export const GamesList = ({ games }: GamesListProps) => {
  const styles = useStyles();

  return (
    <React.Fragment>
      {
        games.length > 0 ?
          <Box className={styles.grid} component='section'>
            { 
              games.map(game => (
                <GameCard key={game.id} info={game} />
              ))
            }
          </Box>
        :
          <CircularProgress className={styles.loading} />
      }
    </React.Fragment>
  );
}