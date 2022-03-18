import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedWidth: new Animated.Value(0),
      animatedHeight: new Animated.Value(35),
    }

    Animated.timing(
      this.state.animatedWidth,
      {
        toValue: 100,
        duration: 5000
      }
    ).start()

  }
 
  render(){

    let percentageAnimated = this.state.animatedWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })

    return (
      <View style={styles.container}>
        <Animated.View style={{
          backgroundColor: '#4169E1', 
          width: percentageAnimated, 
          height: 25
        }}>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
