import React, { Component } from 'react'
import { Animated, BackHandler, Image, PanResponder, Text, TouchableOpacity, View } from 'react-native'

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
      isLiked: false,
    }

    // Duration animation
    this.durationAnimationQuickTouch = 500
    this.durationAnimationLongTouch = 150
    this.durationAnimationBox = 500

    // Animation button when quick touch button
    this.tiltIconAnim = new Animated.Value(0)
    this.zoomIconAnim = new Animated.Value(0)
    this.zoomTextAnim = new Animated.Value(0)

    // Animation when button long touch button
    this.tiltIconAnim2 = new Animated.Value(0)
    this.zoomIconAnim2 = new Animated.Value(0)
    this.zoomTextAnim2 = new Animated.Value(0)

    // Animation of the box
    this.fadeBoxAnim = new Animated.Value(0)

    // Icons
    this.moveRightGroupIcon = new Animated.Value(10)
    // Like
    this.pushIconLikeUp = new Animated.Value(0)
    this.zoomIconLike = new Animated.Value(0)
    // Love
    this.pushIconLoveUp = new Animated.Value(0)
    this.zoomIconLove = new Animated.Value(0)
    // Haha
    this.pushIconHahaUp = new Animated.Value(0)
    this.zoomIconHaha = new Animated.Value(0)
    // Wow
    this.pushIconWowUp = new Animated.Value(0)
    this.zoomIconWow = new Animated.Value(0)
    // Sad
    this.pushIconSadUp = new Animated.Value(0)
    this.zoomIconSad = new Animated.Value(0)
    // Angry
    this.pushIconAngryUp = new Animated.Value(0)
    this.zoomIconAngry = new Animated.Value(0)
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
    if (!this.state.isLiked) {
      this.setState({
        isLiked: true,
      })
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
    } else {
      this.setState({
        isLiked: false,
      })
    }
  }

  doAnimationLongTouch = () => {
    this.setState({
      isLongTouch: true,
    })

    this.tiltIconAnim2.setValue(0)
    this.zoomIconAnim2.setValue(1)
    this.zoomTextAnim2.setValue(1)

    this.fadeBoxAnim.setValue(0)

    this.moveRightGroupIcon.setValue(10)

    this.pushIconLikeUp.setValue(0)
    this.zoomIconLike.setValue(0)

    this.pushIconLoveUp.setValue(0)
    this.zoomIconLove.setValue(0)

    this.pushIconHahaUp.setValue(0)
    this.zoomIconHaha.setValue(0)

    this.pushIconWowUp.setValue(0)
    this.zoomIconWow.setValue(0)

    this.pushIconSadUp.setValue(0)
    this.zoomIconSad.setValue(0)

    this.pushIconAngryUp.setValue(0)
    this.zoomIconAngry.setValue(0)

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
      }),

      Animated.timing(this.fadeBoxAnim, {
        toValue: 1,
        duration: this.durationAnimationBox * this.timeDilation,
        delay: 350,
      }),

      Animated.timing(this.moveRightGroupIcon, {
        toValue: 20,
        duration: this.durationAnimationBox * this.timeDilation,
      }),

      Animated.timing(this.pushIconLikeUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
      }),
      Animated.timing(this.zoomIconLike, {
        toValue: 40,
        duration: 250 * this.timeDilation,
      }),

      Animated.timing(this.pushIconLoveUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 50,
      }),
      Animated.timing(this.zoomIconLove, {
        toValue: 40,
        duration: 250 * this.timeDilation,
        delay: 50,
      }),

      Animated.timing(this.pushIconHahaUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 100,
      }),
      Animated.timing(this.zoomIconHaha, {
        toValue: 40,
        duration: 250 * this.timeDilation,
        delay: 100,
      }),

      Animated.timing(this.pushIconWowUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 150,
      }),
      Animated.timing(this.zoomIconWow, {
        toValue: 40,
        duration: 250 * this.timeDilation,
        delay: 150,
      }),

      Animated.timing(this.pushIconSadUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 200,
      }),
      Animated.timing(this.zoomIconSad, {
        toValue: 40,
        duration: 250 * this.timeDilation,
        delay: 200,
      }),

      Animated.timing(this.pushIconAngryUp, {
        toValue: 25,
        duration: 250 * this.timeDilation,
        delay: 250,
      }),
      Animated.timing(this.zoomIconAngry, {
        toValue: 40,
        duration: 250 * this.timeDilation,
        delay: 250,
      }),
    ]).start()
  }

  doAnimationLongTouchReverse = () => {
    this.tiltIconAnim2.setValue(1)
    this.zoomIconAnim2.setValue(0.8)
    this.zoomTextAnim2.setValue(0.8)

    this.fadeBoxAnim.setValue(1)

    this.moveRightGroupIcon.setValue(20)

    this.pushIconLikeUp.setValue(25)
    this.zoomIconLike.setValue(40)

    this.pushIconLoveUp.setValue(25)
    this.zoomIconLove.setValue(40)

    this.pushIconHahaUp.setValue(25)
    this.zoomIconHaha.setValue(40)

    this.pushIconWowUp.setValue(25)
    this.zoomIconWow.setValue(40)

    this.pushIconSadUp.setValue(25)
    this.zoomIconSad.setValue(40)

    this.pushIconAngryUp.setValue(25)
    this.zoomIconAngry.setValue(40)

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
      }),

      Animated.timing(this.fadeBoxAnim, {
        toValue: 0,
        duration: this.durationAnimationLongTouch * this.timeDilation,
      }),

      Animated.timing(this.moveRightGroupIcon, {
        toValue: 10,
        duration: this.durationAnimationBox * this.timeDilation,
      }),

      Animated.timing(this.pushIconLikeUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 250,
      }),
      Animated.timing(this.zoomIconLike, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 250,
      }),

      Animated.timing(this.pushIconLoveUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 200,
      }),
      Animated.timing(this.zoomIconLove, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 200,
      }),

      Animated.timing(this.pushIconHahaUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 150,
      }),
      Animated.timing(this.zoomIconHaha, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 150,
      }),

      Animated.timing(this.pushIconWowUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 100,
      }),
      Animated.timing(this.zoomIconWow, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 100,
      }),

      Animated.timing(this.pushIconSadUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 50,
      }),
      Animated.timing(this.zoomIconSad, {
        toValue: 0,
        duration: 250 * this.timeDilation,
        delay: 50,
      }),

      Animated.timing(this.pushIconAngryUp, {
        toValue: 0,
        duration: 250 * this.timeDilation,
      }),
      Animated.timing(this.zoomIconAngry, {
        toValue: 0,
        duration: 250 * this.timeDilation,
      }),
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

            {/*Box*/}
            <Animated.View style={[styles.viewBox, {opacity: this.fadeBoxAnim}]}/>

            {/*Group icon*/}
            <Animated.View style={[styles.viewWrapGroupIcon, {marginLeft: this.moveRightGroupIcon}]}>

              {/*Icon like*/}
              <View style={styles.viewWrapIcon}>
                <Animated.Image
                  style={[styles.imgIcon, {
                    marginBottom: this.pushIconLikeUp,
                    width: this.zoomIconLike,
                    height: this.zoomIconLike
                  }]}
                  source={images.like_gif}/>
              </View>

              {/*Icon love*/}
              <View style={styles.viewWrapIcon}>
                <Animated.Image
                  style={[styles.imgIcon, {
                    marginBottom: this.pushIconLoveUp,
                    width: this.zoomIconLove,
                    height: this.zoomIconLove
                  }]}
                  source={images.love_gif}/>
              </View>

              {/*Icon haha*/}
              <View style={styles.viewWrapIcon}>
                <Animated.Image
                  style={[styles.imgIcon, {
                    marginBottom: this.pushIconHahaUp,
                    width: this.zoomIconHaha,
                    height: this.zoomIconHaha
                  }]}
                  source={images.haha_gif}/>
              </View>

              {/*Icon wow*/}
              <View style={styles.viewWrapIcon}>
                <Animated.Image
                  style={[styles.imgIcon, {
                    marginBottom: this.pushIconWowUp,
                    width: this.zoomIconWow,
                    height: this.zoomIconWow
                  }]}
                  source={images.wow_gif}/>
              </View>

              {/*Icon sad*/}
              <View style={styles.viewWrapIcon}>
                <Animated.Image
                  style={[styles.imgIcon, {
                    marginBottom: this.pushIconSadUp,
                    width: this.zoomIconSad,
                    height: this.zoomIconSad
                  }]}
                  source={images.sad_gif}/>
              </View>

              {/*Icon angry*/}
              <View style={styles.viewWrapIcon}>
                <Animated.Image
                  style={[styles.imgIcon, {
                    marginBottom: this.pushIconAngryUp,
                    width: this.zoomIconAngry,
                    height: this.zoomIconAngry
                  }]}
                  source={images.angry_gif}/>
              </View>

            </Animated.View>

            {/*Button*/}
            <View style={styles.viewBtn} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
              <Animated.Image source={this.state.isLiked ? images.like_static_fill : images.like_static}
                              style={[styles.imgLikeInBtn,
                                {
                                  transform: [
                                    {rotate: this.state.isLongTouch ? tiltBounceIconAnim2 : tiltBounceIconAnim},
                                    {scale: this.state.isLongTouch ? this.zoomIconAnim2 : zoomBounceIconAnim}]
                                }]}/>
              <Animated.Text
                style={[styles.textBtn, {color: this.state.isLiked ? '#3b5998' : 'grey'},
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
