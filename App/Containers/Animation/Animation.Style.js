import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // Container
  viewContainer: {
    flex: 1,
    flexDirection: 'column'
  },

  // Toolbar
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

  // Body
  viewBody: {
    flex: 1,
    flexDirection: 'column',
  },

  // Top blank space
  viewTopSpace: {
    width: '100%',
    height: 100,
  },

  // Main content
  viewContent: {
    backgroundColor: 'rgba(255 ,248 ,225, 0.7)',
    flexDirection: 'column',
    height: 350,
    marginLeft: 20,
    marginRight: 20,
  },

  // Box
  viewBox: {
    borderWidth: 1,
    borderRadius: 30,
    width: 300,
    height: 50,
    marginTop: 100,
    position: 'absolute',
  },

  // Button like
  viewBtn: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    marginTop: 190,
  },
  textBtn: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imgLikeInBtn: {
    width: 25,
    height: 25,
    tintColor: 'grey',
  }

})
