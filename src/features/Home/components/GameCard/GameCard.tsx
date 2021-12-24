import { 
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

import { useStyles } from './GameCard.styles';

import { GameCardProps } from './types';

export const GameCard = ({ info }: GameCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardActionArea>
        <img
          className={styles.thumbnail}
          src={info.thumbnail} 
          alt={info.title}
        />
        <CardContent>
          <Typography className={styles.title}>
            {info.title}
          </Typography>

          <Typography className={styles.description}>
            {info.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={styles.lowerBar}>
        <Box className={styles.box}>
          <Typography className={styles.smallerText}>
            {info.genre}
          </Typography>
          <Typography className={styles.smallerText}>
            {info.platform}
          </Typography>
        </Box>
        
        <a
          className={styles.anchor}
          href={info.game_url} 
          target='_blank'
          rel='noreferrer'
        >
          <Button 
            className={styles.button}
            variant='outlined'
            size='small'
            endIcon={<ChevronRight />}
          >
            Game
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}