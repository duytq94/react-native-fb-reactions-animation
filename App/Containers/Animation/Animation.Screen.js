import React, { Component } from 'react'
import { Animated, BackHandler, Image, Text, TouchableOpacity, View, PanResponder } from 'react-native'

import styles from './Animation.Style'
import images from '../../Themes/Images'

export default class AnimationScreen extends Component {

  constructor (props) {
    super(props)
    this.backPress = this.handleBackPress.bind(this)

    // Slow down speed animation here (1 = default)
    this.timeDilation = 1

    // If duration touch longer than it, mean long touch
    this.durationLongPress = 250

    // Variables to check
    this.isTouchBtn = false
    this.state = {
      isLongTouch: false,
    }

    // Duration animation
    this.durationAnimationQuickTouch = 500
    this.durationAnimationLongTouch = 150

    // Animation when quick touch button
    this.tiltIconAnim = new Animated.Value(0)
    this.zoomIconAnim = new Animated.Value(0)
    this.zoomTextAnim = new Animated.Value(0)

    // Animation when long touch button
    this.tiltIconAnim2 = new Animated.Value(0)
    this.zoomIconAnim2 = new Animated.Value(0)
    this.zoomTextAnim2 = new Animated.Value(0)
  }

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.backPress)

    this.setupPanResponder()
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.backPress)
  }

  setupPanResponder () {
    this.rootPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => !this.isTouchBtn,

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

  handleBackPress () {
    this.props.navigation.goBack()
    return true
  }

  onTouchStart = () => {
    this.isTouchBtn = true
    console.log('touch start')
    this.timer = setTimeout(this.doAnimationLongTouch, this.durationLongPress)
  }

  onTouchEnd = () => {
    this.isTouchBtn = false
    console.log('touch end')
    if (!this.state.isLongTouch) {
      clearTimeout(this.timer)
      this.doAnimationQuickTouch()
    } else {
      this.doAnimationLongTouchReverse()
    }
  }

  doAnimationQuickTouch = () => {

    this.tiltIconAnim.setValue(0)
    this.zoomIconAnim.setValue(0)
    this.zoomTextAnim.setValue(0)
    Animated.parallel([
      Animated.timing(this.tiltIconAnim, {
        toValue: 1,
        duration: this.durationAnimationQuickTouch * this.timeDilation,
      }),
      Animated.timing(this.zoomIconAnim, {
        toValue: 1,
        duration: this.durationAnimationQuickTouch * this.timeDilation,
      }),
      Animated.timing(this.zoomTextAnim, {
        toValue: 1,
        duration: this.durationAnimationQuickTouch * this.timeDilation,
      })
    ]).start()
  }

  doAnimationLongTouch = () => {
    this.setState({
      isLongTouch: true,
    })

    this.tiltIconAnim2.setValue(0)
    this.zoomIconAnim2.setValue(1)
    this.zoomTextAnim2.setValue(1)
    Animated.parallel([
      Animated.timing(this.tiltIconAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.timeDilation,
      }),
      Animated.timing(this.zoomIconAnim2, {
        toValue: 0.8,
        duration: this.durationAnimationLongTouch * this.timeDilation,
      }),
      Animated.timing(this.zoomTextAnim2, {
        toValue: 0.8,
        duration: this.durationAnimationLongTouch * this.timeDilation,
      })
    ]).start()
  }

  doAnimationLongTouchReverse = () => {

    this.tiltIconAnim2.setValue(1)
    this.zoomIconAnim2.setValue(0.8)
    this.zoomTextAnim2.setValue(0.8)
    Animated.parallel([
      Animated.timing(this.tiltIconAnim2, {
        toValue: 0,
        duration: this.durationAnimationLongTouch * this.timeDilation,
      }),
      Animated.timing(this.zoomIconAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.timeDilation,
      }),
      Animated.timing(this.zoomTextAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.timeDilation,
      })
    ]).start(this.onAnimationLongTouchComplete)
  }

  onAnimationLongTouchComplete = () => {
    this.setState({
      isLongTouch: false,
    })
  }

  render () {
    let tiltBounceIconAnim = this.tiltIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: ['0deg', '20deg', '-15deg', '0deg']
    })
    let zoomBounceIconAnim = this.zoomIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.15, 1]
    })
    let zoomBounceTextAnim = this.zoomIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.15, 1]
    })

    let tiltBounceIconAnim2 = this.tiltIconAnim2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '20deg']
    })

    return (
      <View style={styles.viewContainer}>
        {/*Toolbar*/}
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back}/>
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>ANIMATION</Text>
          <View style={styles.icTrail}/>
        </View>

        {/*Body*/}
        <View style={styles.viewBody} {...this.rootPanResponder.panHandlers} >
          {/*Top space*/}
          <View style={styles.viewTopSpace}/>


          {/*Content*/}
          <View style={styles.viewContent}>

            {/*Button*/}
            <View style={styles.viewBtn} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
              <Animated.Image source={images.like_static}
                              style={[styles.imgLikeInBtn,
                                {
                                  transform: [
                                    {rotate: this.state.isLongTouch ? tiltBounceIconAnim2 : tiltBounceIconAnim},
                                    {scale: this.state.isLongTouch ? this.zoomIconAnim2 : zoomBounceIconAnim}]
                                }]}/>
              <Animated.Text
                style={[styles.textBtn,
                  {transform: [{scale: this.state.isLongTouch ? this.zoomTextAnim2 : zoomBounceTextAnim}]}]}>
                Like
              </Animated.Text>
            </View>
          </View>

        </View>
      </View>

    )
  }
}
