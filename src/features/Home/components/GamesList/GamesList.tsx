import React from 'react';
import { Box } from '@material-ui/core';

import { GameCard } from '../GameCard';
import { Loading } from '../../../../components/Loading';

import { useStyles } from './GamesList.styles';

import { GamesListProps } from './types';

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
          <Loading />
      }
    </React.Fragment>
  );
}