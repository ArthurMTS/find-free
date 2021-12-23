import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  header: {
    backgroundColor: '#222',
    padding: '10px 50px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
  },
  icon: {
    fontSize: '5ch',
    color: '#fff',
  },
  title: {
    color: '#fff',
  },
});