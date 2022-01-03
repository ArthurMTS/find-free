import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  image: {
    width: '300px',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      width: '100%',
    },
  },
});