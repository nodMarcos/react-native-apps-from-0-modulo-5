import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedWidth: new Animated.Value(200),
      animatedHeight: new Animated.Value(35),
      animatedOpacity: new Animated.Value(0)
    }

    this.loadGraphic = this.loadGraphic.bind(this)

  }
  loadGraphic() {
    Animated.sequence([
      Animated.timing(
        this.state.animatedOpacity, {
          toValue: 1,
          duration:400
        }
      ),

      Animated.timing(
        this.state.animatedHeight,
        {
          toValue: 300,
          duration: 1000
        }
      )
    ]).start()
  }
  render(){
    return (
      <View style={{flex: 1}}>

        <View style={{
          height: 80, 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'row',
          backgroundColor: '#4169E1'
        }}>
          <TouchableOpacity onPress={this.loadGraphic}>
            <Text style={{fontSize:25, color: '#FFF'}}>Generate Graphic</Text>
          </TouchableOpacity>

        </View>

        <View style={{
          flex: 1, 
          flexDirection: 'column', 
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <Text>Sells</Text>

          <Animated.View style={{
            width: this.state.animatedWidth,
            height: this.state.animatedHeight,
            backgroundColor: "#FF0000", 
            justifyContent: "center", 
            opacity: this.state.animatedOpacity
          }}>
            
            <Text style={{
              color: '#FFF',
              fontSize:22,
              textAlign: 'center'
            }}>
              R$ 150,00
            </Text>

          </Animated.View>

        </View>

       
      </View>
    );
  }
}