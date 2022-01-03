import { Box, Button, Link, Typography } from '@material-ui/core';

import { useStyles } from './SideContent.styles';

import { SideContentProps } from './types';

export const SideContent = ({ thumbnail, title, status, gameURL }: SideContentProps) => {
  const styles = useStyles();

  return (
    <Box component='aside'>
      <img src={thumbnail} alt={title} />

      <Box className={styles.buttonGroup}>
        <Button className={status === 'Live' ? styles.live : styles.down} variant='contained'>
          <Typography>
            {status}
          </Typography>
        </Button>

        <Link
          href={gameURL} 
          target='_blank'
        >
          <Button
          variant='contained' color='primary'>Play Now</Button>
        </Link>
      </Box>
    </Box>
  );
}