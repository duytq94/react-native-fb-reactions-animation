import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  toolbar: {
    width: '100%',
    height: Platform.OS === 'android' ? 48 : 68,
    justifyContent: 'center',
    backgroundColor: '#3b5998'
  },
  titleToolbar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? 0 : 20
  },

  // Button
  button: {
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#3b5998'
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    margin: 10
  },

  // Set speed
  viewWrapSetSpeed: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSpeed: {
    color: 'black',
    fontWeight: 'bold'
  },
  viewBtnSetSpeed: {
    margin: 5,
    padding: 10,
    borderRadius: 20
  },
  textBtnSpeed: {
    color: 'white'
  }
})
