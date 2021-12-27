import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  main: {
    minHeight: '100vh',
    padding: '80px 0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  goToStart: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});