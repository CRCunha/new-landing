import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  conentContainer: {
    marginTop: '-80px',
    backgroundColor: '#fff',
  },
  cardContainer: {
    marginTop: 170,
    marginBottom: 80,
    borderRadius: 20,
    width: '100%',
    height: 450,
    backgroundColor: '#f0f0f0',

    display: 'flex',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#bcb8f7',
    borderRadius: 20,
    width: '22%',
    height: 540,
    marginTop: '-140px',
    marginLeft: 50,
    marginRight: 50,
    borderBottom: '5px solid #8c84eb',
    color: '#fff',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardCornerLeft: {
    backgroundColor: '#bcb8f7',
    borderRadius: 20,
    width: '22%',
    height: 480,
    marginTop: '-80px',
    borderBottom: '5px solid #8c84eb',
    color: '#fff',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardCornerRight: {
    backgroundColor: '#bcb8f7',
    borderRadius: 20,
    width: '22%',
    height: 480,
    marginTop: '-80px',
    borderBottom: '5px solid #8c84eb',
    color: '#fff',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '80%',
    height: '90%',
  },

  iconContainer: {
    width: '100%',
    height: 110,
  },

  iconCircle: {
    backgroundColor: '#ffffff85',
    width: 110,
    height: 110,
    borderRadius: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 50,
    color: '#fff',
  },
}));

export default useStyles;
