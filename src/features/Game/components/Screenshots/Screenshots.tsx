import { Box } from '@material-ui/core';

import { useStyles } from './Screenshots.styles';

import { ScreenshotsProps } from './types';

export const Screenshots = ({ images }: ScreenshotsProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      {
        images?.map(shot => <img className={styles.image} key={shot.id} src={shot.image} />)
      }
    </Box>
  );
}