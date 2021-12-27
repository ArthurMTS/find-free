import { Box } from '@material-ui/core';
import { SportsEsports } from '@material-ui/icons';

import { useStyles } from './Header.styles';

export const Header = () => {
  const styles = useStyles();

  return (
    <Box id='header' component='header' className={styles.header}>
      <SportsEsports className={styles.icon} />
      <h1 className={styles.title}>Find Free</h1>
    </Box>
  );
}