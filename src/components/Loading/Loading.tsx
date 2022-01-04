import { CircularProgress } from '@material-ui/core';

import { useStyles } from './Loading.styles';

export const Loading = () => {
  const styles = useStyles();

  return (
    <CircularProgress className={styles.root} />
  );
}