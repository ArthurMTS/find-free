import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  header: {
    backgroundColor: '#222',
    padding: '10px 50px',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    '&:hover h1': {
      color: '#303F9F',
    },
  },
  icon: {
    fontSize: '5ch',
    color: '#fff',
  },
  title: {
    color: '#fff',
    transition: 'all 0.2s',
  },
});