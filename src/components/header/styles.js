import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  headerContainer: {
    width: '100vw',
    backgroundColor: '#f1f1f1',
    minHeight: 850,
    backgroundSize: 'cover',
    zIndex: 10,
    marginBottom: 100,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 50,
    '& img': {
      width: '75%',
      zIndex: 1000,
      marginLeft: 120,
    },
  },
  svgContainer: {
    backgroundColor: '#f1f1f1',
    display: 'flex',
    height: 1,
    alignItems: 'flex-end',
  },
}));

export default useStyles;
