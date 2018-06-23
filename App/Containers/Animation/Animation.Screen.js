import React, { Component } from 'react'
import { Animated, BackHandler, Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './Animation.Style'
import images from '../../Themes/Images'

export default class AnimationScreen extends Component {
  constructor (props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
    this.state = {
      whichBtnClick: 'zoom in'
    }
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', backPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', backPress)
  }

  handleBackPress () {
    this.props.navigation.goBack()
    return true
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>ANIMATION</Text>
          <View style={styles.icBack} />
        </View>

      </View>
    )
  }
}
