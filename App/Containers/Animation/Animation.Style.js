import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  toolbar: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    backgroundColor: '#3b5998',
    flexDirection: 'row'
  },
  icBack: {
    width: 23,
    height: 23,
    marginLeft: 26,
    tintColor: 'white'
  },
  icTrail: {
    width: 23,
    height: 23,
    marginLeft: 26,
  },
  titleToolbar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    flex: 1
  },

  viewTopSpace: {
    width: '100%',
    height: 150,
  },

  viewBody: {
    flex: 1,
  },

  viewBtn: {
    backgroundColor: '#7e8da6',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 100,
    height: 100,
  },
  textBtn: {
    color: 'white',
    textAlign: 'center'
  },
})
