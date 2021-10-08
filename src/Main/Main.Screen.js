import React, {Component} from 'react';
import {Alert, BackHandler, Text, TouchableOpacity, View} from 'react-native';
import styles from './Main.Style';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSpeed: 1,
    };
    BackHandler.addEventListener('hardwareBackPress', function () {
      Alert.alert(
        'Exit app',
        'Are you sure to exit?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
      return true;
    });
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewContainer}>
          {/*Set currentSpeed*/}
          <View style={styles.viewWrapSetSpeed}>
            <Text style={styles.textSpeed}>SPEED:</Text>
            <TouchableOpacity
              onPress={() => this.setSpeed(1)}
              style={[
                styles.viewBtnSetSpeed,
                {
                  backgroundColor:
                    this.state.currentSpeed === 1 ? '#3b5998' : '#DAA520',
                },
              ]}>
              <Text style={styles.textBtnSpeed}>1.0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setSpeed(2)}
              style={[
                styles.viewBtnSetSpeed,
                {
                  backgroundColor:
                    this.state.currentSpeed === 2 ? '#3b5998' : '#DAA520',
                },
              ]}>
              <Text style={styles.textBtnSpeed}>2.0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setSpeed(3)}
              style={[
                styles.viewBtnSetSpeed,
                {
                  backgroundColor:
                    this.state.currentSpeed === 3 ? '#3b5998' : '#DAA520',
                },
              ]}>
              <Text style={styles.textBtnSpeed}>3.0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setSpeed(4)}
              style={[
                styles.viewBtnSetSpeed,
                {
                  backgroundColor:
                    this.state.currentSpeed === 4 ? '#3b5998' : '#DAA520',
                },
              ]}>
              <Text style={styles.textBtnSpeed}>4.0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setSpeed(5)}
              style={[
                styles.viewBtnSetSpeed,
                {
                  backgroundColor:
                    this.state.currentSpeed === 5 ? '#3b5998' : '#DAA520',
                },
              ]}>
              <Text style={styles.textBtnSpeed}>5.0</Text>
            </TouchableOpacity>
          </View>

          {/*Button*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('AnimationScreen', {
                speed: this.state.currentSpeed,
              });
            }}>
            <Text style={styles.textBtn}>Facebook reactions animation</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  setSpeed(value) {
    this.setState({
      currentSpeed: value,
    });
  }
}
