import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedWidth: new Animated.Value(150),
      animatedHeight: new Animated.Value(50),
    }

    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.animatedWidth,
          {
            toValue: 250,
            duration: 700,
          }
        ),

        Animated.timing(
          this.state.animatedWidth, {
            toValue: 150,
            duration: 700
          }
        )
      ])
    )

  }

  render(){
    return (
      <View style={styles.container}>
        <Animated.View style={{
          width: this.state.animatedWidth,
          height: this.state.animatedHeight,
          backgroundColor: "#4169E1", 
          justifyContent: "center", 
          borderRadius: 25
        }}>
          <Text style={{
            color: '#FFF',
            fontSize:22,
            textAlign: 'center'
          }}>
            Carregando...
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
