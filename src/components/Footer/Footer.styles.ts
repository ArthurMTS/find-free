import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  footer: {
    background: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    gap: '10px',
  },
  credits: {
    color: '#fff',
    fontSize: '18px',
  },
  icon: {
    fontSize: '3ch',
    color: '#fff',
    opacity: '0.9',
    transition: 'all 0.2s',
    '&:hover': {
      opacity: '1',
    },
  },
});