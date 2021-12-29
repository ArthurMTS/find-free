import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    backgroundColor: '#2A2E33',
    margin: '10px 0',
    color: '#eee',
    width: '25vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: '#eee',
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
  lowerBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
  },
  smallerText: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#dedede',
  },
  anchor: {
    textDecoration: 'none',
  },
  button: {
    color: '#eee',
    borderColor: '#eee',
    transition: 'all 0.2s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});