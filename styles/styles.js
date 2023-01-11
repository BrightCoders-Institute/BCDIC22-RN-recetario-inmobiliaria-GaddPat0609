import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    width: '90%',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 20,
    backgroundColor: '#F5FDFF',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'relative',
  },
  contentCard: {
    width: '65%',
  },
  contentCardTitle: {},
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starContainer: {
    backgroundColor: '#FBEDB7',
    width: 50,
    height: 25,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 6,
    position: 'absolute',
  },
  buttonHeart: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: '#00B074',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 5,
    right: 20,
  },
  bold: {
    fontWeight: '600',
  },
  fontxlSS: {
    fontSize: 20,
  },

  iconSpace: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
