import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    backgroundColor: '#2A2E33',
    margin: '10px 0',
    color: '#eee',
    width: '35vw',
  },
  thumbnail: {
    width: '100%',
  },
  title: {
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#fff',
  },
  description: {
    textAlign: 'justify',
  },
  box: {
    
  },
  lowerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  smallerText: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#dedede'
  },
  anchor: {
    textDecoration: 'none',
  },
  button: {
    color: '#eee',
    borderColor: '#eee',
    transition: 'all 0.2s',
    '&:hover': {
      color: '#75b5fd',
      borderColor: '#75b5fd',
    }
  }
});