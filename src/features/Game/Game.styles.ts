import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  main: {
    minHeight: '100vh',
    padding: '80px 15vw 20px',
    display: 'flex',
    backgroundColor: '#2A2E33',
    gap: '20px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
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