import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin: '10px auto 0',
    gap: '0 20px',
  },
});