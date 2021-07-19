import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  headerBarContainer: {
    height: 115,
  },
  LogoContainer: {
    height: 115,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    '& img': {
      width: '15%',
    },
  },
  menu: {
    height: 115,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuIten: {
    padding: '20px 50px',
    cursor: 'pointer',
    color: '#00003e',
  },
  buttonHeader: {
    backgroundColor: '#bdb8f7',
  },
}));

export default useStyles;
