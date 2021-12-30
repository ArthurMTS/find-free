import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Link, Typography, TableContainer, Table, TableRow, TableBody, TableCell, Paper } from '@material-ui/core';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

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
        <Box component='aside'>
          <img src={game?.thumbnail} alt={game?.title} />

          <Box className={styles.buttonGroup}>
            <Button className={game?.status === 'Live' ? styles.live : styles.down } variant='contained'>
              <Typography>
                {game?.status}
              </Typography>
            </Button>

            <Link href={game?.game_url} target='_blank'>
              <Button variant='contained' color='primary'>Play Now</Button>
            </Link>
          </Box>
        </Box>

        <Box component='section' className={styles.content}>
          <h2 className={styles.title}>{game?.title}</h2>
          <Box className={styles.genre}>
            <span>{game?.genre}</span>
            <span>{game?.platform}</span>
          </Box>

          <p><strong>Publisher:</strong> {game?.publisher}</p>

          <p><strong>Developer:</strong> {game?.developer}</p>

          <p className={styles.release}>{game?.release_date}</p>

          <p className={styles.description}>{game?.description}</p>

          <h3>Requirements</h3>

          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableBody>
               <TableRow>
                  <TableCell component='th' className={styles.cell}>
                    System
                  </TableCell>
                  <TableCell className={styles.cell}>
                    {game?.minimum_system_requirements.os}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={styles.cell}component='th'>
                    Processor
                  </TableCell>
                  <TableCell className={styles.cell}>
                    {game?.minimum_system_requirements.processor}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' className={styles.cell}>
                    Memory  
                  </TableCell>
                  <TableCell className={styles.cell}>
                    {game?.minimum_system_requirements.memory}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' className={styles.cell}>
                    Graphics  
                  </TableCell>
                  <TableCell className={styles.cell}>
                    {game?.minimum_system_requirements.graphics}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' className={styles.cell}>
                    Storage  
                  </TableCell>
                  <TableCell className={styles.cell}>
                    {game?.minimum_system_requirements.storage}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box>
            {
              game?.screenshots.map(shot => <img className={styles.screenshot} key={shot.id} src={shot.image} />)
            }
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
}