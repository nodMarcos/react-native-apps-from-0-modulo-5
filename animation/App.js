import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedWidth: new Animated.Value(150),
      animatedHeight: new Animated.Value(50),
      animatedOpacity: new Animated.Value(0)
    }

    // Animated.parallel([

    //   Animated.timing(
    //     this.state.animatedOpacity,
    //     {
    //       toValue: 1,
    //       duration: 1500
    //     }
    //   ),

    //   Animated.timing(
    //     this.state.animatedWidth, {
    //       toValue: 300,
    //       duration: 2000
    //     }
    //   ),

    //   Animated.timing(
    //     this.state.animatedHeight, {
    //       toValue: 200,
    //       duration: 2000
    //     }
    //   ),
      
    //   Animated.timing(
    //     this.state.animatedOpacity,
    //     {
    //       toValue: 0,
    //       duration: 2000
    //     }
    //   )
      
    // ]).start()

    // Animated.sequence([

    //   Animated.timing(
    //     this.state.animatedWidth, {
    //       toValue: 300,
    //       duration: 2000
    //     }
    //   ),

    //   Animated.timing(
    //     this.state.animatedHeight, {
    //       toValue: 200,
    //       duration: 2000
    //     }
    //   )
      
    // ]).start()

    Animated.sequence([

      Animated.timing(
        this.state.animatedOpacity, {
          toValue: 1,
          duration: 1500
        }
      ),

      Animated.parallel([

        Animated.timing(
          this.state.animatedWidth, {
            toValue: 300,
            duration: 2000
          }
        ),

        Animated.timing(
          this.state.animatedHeight,{
            toValue: 200,
            duration: 2000
          }
        )
      ]),
      
      Animated.timing(
        this.state.animatedOpacity, {
          toValue: 0,
          duration: 1500
        }
      )

      
    ]).start()
  }

  render(){
    return (
      <View style={styles.container}>
        <Animated.View style={{width: this.state.animatedWidth, height: this.state.animatedHeight, backgroundColor: "#4169E1", justifyContent: "center", opacity: this.state.animatedOpacity}}>
          <Text style={{color: '#FFF', fontSize:22, textAlign: 'center'}}>Carregando...</Text>
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
