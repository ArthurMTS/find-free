import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    backgroundColor: '#2A2E33',
    minHeight: '93vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    padding: '80px 15vw 20px',
    display: 'flex',
    gap: '20px',
  },
  returnHome: {
    position: 'absolute',
    top: '80px',
    left: '20px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  content: {
    color: '#fff',
  },
  title: {
    margin: '20px 0 10px',
  },
  subTitle: {
    fontSize: '20px',
    margin: '20px 0',
  },
  genre: {
    marginBottom: '60px',
    color: '#e7e7e7',
    display: 'flex',
    gap: '10px',
    fontSize: '12px',
  },
  release: {
    marginTop: '20px',
  },
  description: {
    marginTop: '60px',
    textAlign: 'justify',
    textIndent: '50px',
    fontSize: '18px',
  },
});