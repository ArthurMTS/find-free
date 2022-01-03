import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RequirementsTable } from './components/RequirementsTable';
import { Screenshots } from './components/Screenshots';
import { SideContent } from './components/SideContent';

import { api } from '../../_config/api';

import { useStyles } from './Game.styles';

import { GameData } from './types';

export const Game = () => {
  const [game, setGame] = useState<GameData>();

  const { id } = useParams();
  const styles = useStyles();

  useEffect(() => {
    const handleRequest = async () => {
      const result = await api.get<GameData>(`game?id=${id}`);

      setGame(result.data);
      console.log(result.data);
    }

    handleRequest();
  }, [id]);

  return (
    <React.Fragment>
      <Header />
      <Box component='main' className={styles.main}>
        <SideContent
          title={game?.title}
          thumbnail={game?.thumbnail}
          status={game?.status}
          gameURL={game?.game_url}
        />

        <Box component='section' className={styles.content}>
          <h2 className={styles.title}>{game?.title}</h2>
          <Box className={styles.genre}>
            <span>{game?.genre}</span>
            <span>{game?.platform}</span>
          </Box>

          <p><strong>Publisher:</strong> {game?.publisher}</p>

          <p><strong>Developer:</strong> {game?.developer}</p>

          <p className={styles.release}>Release: {game?.release_date}</p>

          <p className={styles.description}>{game?.description}</p>

          <h3 className={styles.subTitle}>Requirements</h3>

          <RequirementsTable requirements={game?.minimum_system_requirements} />

          <h3 className={styles.subTitle}>Screenshots</h3>

          <Screenshots images={game?.screenshots} />
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
}