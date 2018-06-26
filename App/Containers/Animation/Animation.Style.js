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
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'column',
    height: 320,
    marginLeft: 20,
    marginRight: 10,
  },

  // Box
  viewBox: {
    borderRadius: 30,
    width: 300,
    height: 50,
    marginTop: 100,
    marginLeft: 20,
    position: 'absolute',
    // Has to set color for elevation
    backgroundColor: 'white',
    // elevation: 6,
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
    marginTop: 170,
    backgroundColor: 'white',
  },
  textBtn: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imgLikeInBtn: {
    width: 25,
    height: 25,
  },

  // Group icon
  viewWrapGroupIcon: {
    flexDirection: 'row',
    width: 300,
    height: 120,
    marginTop: 50,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewWrapIcon:{
    width: 40,
  },
})
