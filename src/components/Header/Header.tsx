import { Box } from '@material-ui/core';
import { SportsEsports } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { useStyles } from './Header.styles';

export const Header = () => {
  const styles = useStyles();

  return (
    <Box id='header' component='header' className={styles.header}>
      <Link to='/' className={styles.link}>
        <SportsEsports className={styles.icon} />
        <h1 className={styles.title}>Find Free</h1>
      </Link>
    </Box>
  );
}