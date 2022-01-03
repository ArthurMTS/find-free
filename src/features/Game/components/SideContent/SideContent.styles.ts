import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  wideButton: {
    padding: '5px 100px',
    textDecoration: 'none',
  },
  live: {
    backgroundColor: '#1aed40',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1aed40',
    },
  },
  down: {
    backgroundColor: '#ed1730',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#ed1730',
    },
  },
});