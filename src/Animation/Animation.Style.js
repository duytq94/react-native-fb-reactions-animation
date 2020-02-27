import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  // Container
  viewContainer: {
    flex: 1,
    flexDirection: 'column'
  },

  // Toolbar
  toolbar: {
    width: '100%',
    height: Platform.OS === 'android' ? 48 : 68,
    alignItems: 'center',
    backgroundColor: '#3b5998',
    flexDirection: 'row'
  },
  icBack: {
    width: 23,
    height: 23,
    marginLeft: 26,
    tintColor: 'white',
    marginTop: Platform.OS === 'android' ? 0 : 20
  },
  icTrail: {
    width: 23,
    height: 23,
    marginLeft: 26,
    marginTop: Platform.OS === 'android' ? 0 : 20
  },
  titleToolbar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : 20
  },

  // Body
  viewBody: {
    flex: 1,
    flexDirection: 'column'
  },

  // Top blank space
  viewTopSpace: {
    width: '100%',
    height: 100
  },

  // Main content
  viewContent: {
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'column',
    height: 320,
    marginLeft: 10,
    marginRight: 10
  },

  // Box
  viewBox: {
    borderRadius: 30,
    width: 320,
    height: 50,
    marginTop: 100,
    marginLeft: 20,
    position: 'absolute',
    // Has to set color for elevation
    backgroundColor: 'white'
    // elevation: 6,
  },

  // Button like
  viewBtn: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    marginTop: 170,
    backgroundColor: 'white'
  },
  textBtn: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold'
  },
  imgLikeInBtn: {
    width: 25,
    height: 25
  },

  // Group icon
  viewWrapGroupIcon: {
    flexDirection: 'row',
    width: 320,
    height: 120,
    marginTop: 50,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingRight: 5
  },
  viewWrapIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgIcon: {
    width: 36,
    height: 36
  },
  viewWrapTextDescription: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 2,
    paddingBottom: 2,
    position: 'absolute'
  },
  textDescription: {
    color: 'white',
    fontSize: 8
  },

  // Group jump icon
  viewWrapGroupJumpIcon: {
    flexDirection: 'row',
    width: 330,
    height: 140,
    borderWidth: 1,
    borderColor: 'green',
    marginTop: 30,
    marginLeft: 10,
    position: 'absolute',
    alignItems: 'flex-end'
  }
})
