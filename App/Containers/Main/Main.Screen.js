import React, { Component } from 'react'
import { Alert, BackHandler, Text, TouchableOpacity, View } from 'react-native'
import styles from './Main.Style'

export default class MainScreen extends Component {
  constructor (props) {
    super(props)
    BackHandler.addEventListener('hardwareBackPress', function () {
      Alert.alert(
        'Exit app',
        'Are you sure to exit?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
          }
        ],
        {
          cancelable: false
        }
      )
      return true
    })
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.titleToolbar}>MAIN</Text>
        </View>

        <View style={styles.viewContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('AnimationScreen', {})
            }}
          >
            <Text style={styles.textBtn}>Facebook reactions animation</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}
