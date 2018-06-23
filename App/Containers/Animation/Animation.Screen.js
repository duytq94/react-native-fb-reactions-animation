import React, { Component } from 'react'
import { Animated, BackHandler, Image, Text, TouchableOpacity, View, PanResponder } from 'react-native'

import styles from './Animation.Style'
import images from '../../Themes/Images'

export default class AnimationScreen extends Component {

  constructor (props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
    isPressBtn = false

  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', backPress)

    this.rootPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => !isPressBtn,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('on grant')

      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('on move', gestureState)
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('on release')
      },
    })

  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', backPress)
  }

  handleBackPress () {
    this.props.navigation.goBack()
    return true
  }

  onTouchStart = () => {
    isPressBtn = true
    console.log('touch start')
  }

  onTouchEnd = () => {
    isPressBtn = false
    console.log('touch end')
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        {/*Toolbar*/}
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>ANIMATION</Text>
          <View style={styles.icBack}/>
        </View>

        {/*Body*/}
        <View style={{backgroundColor: 'cyan', flex: 1}} {...this.rootPanResponder.panHandlers} >
          <View style={styles.viewBtn} onTouchStart={this.onTouchStart}
                onTouchEnd={this.onTouchEnd}>
            <Text style={styles.textBtn}>Like</Text>
          </View>
        </View>
      </View>

    )
  }
}
