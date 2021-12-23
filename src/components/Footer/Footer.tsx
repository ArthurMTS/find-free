import { Box, Typography } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import { useStyles } from './Footer.styles';

export const Footer = () => {
  const styles = useStyles();

  return (
    <Box component='footer' className={styles.footer}>
      <Typography className={styles.credits}>
        Created by ArthurMTS
      </Typography>
      <a 
        href='https://github.com/ArthurMTS' 
        target='_blank'
        rel="noreferrer"
      >
        <GitHub className={styles.icon} />
      </a>
    </Box>
  );
}