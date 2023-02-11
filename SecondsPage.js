import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, Pressable } from 'react-native';
import EmojiFace from './EmojiFace';
import LifeBar from './LifeBar';
import PopView from './PopView';


export class SecondsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    };

    componentDidMount() {
        // timerID becomes a property of this component
        this.timerID = setInterval(
          () => this.tick(), 1000
        );
        console.log(this.props)
    }

    tick() {
      if(this.state.counter < 48){
        let newCounter = this.state.counter + 1;
        this.setState({counter: newCounter});
      }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    giveAttention = () => {
      if(this.state.counter > 0){
        let newCounter = this.state.counter - 1;
        this.setState({counter: newCounter});
      }
    }
    giveFood = () => {
      if(this.state.counter > 0){
        let newCounter = this.state.counter - 5;
        this.setState({counter: newCounter});
      }
    }
    giveLove = () => {
      if(this.state.counter > 0){
        let newCounter = this.state.counter - 8;
        this.setState({counter: newCounter});
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginBottom: 100, marginTop: 50}}>
                  <LifeBar number={this.state.counter} name={this.props.route.params.name} />
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <EmojiFace number={this.state.counter}/>
                  <PopView number={this.state.counter} />
                </View>
                <View style={{marginTop: 100, flex: 2, flexDirection: 'collumn'}}>
                  <View style={{flex: 2, flexDirection: 'row'}}>
                    <Pressable style={{backgroundColor: 'black', height: 45, marginRight: 20, borderRadius: 10}}>
                      <Button
                          color='white'
                          title='Give Attention +1'
                          onPress={this.giveAttention}
                      />
                    </Pressable>
                    <Pressable style={{backgroundColor: 'black', height: 45, width: 155, borderRadius: 10}}>
                      <Button
                          color='white'
                          title='Give Food +5'
                          onPress={this.giveFood}
                      />
                    </Pressable>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Pressable style={{backgroundColor: 'black', height: 45, marginLeft: 50, marginRight: 0, marginTop: -70, width: '70%', borderRadius: 10}}>
                      <Button
                          color='white'
                          title='Give Love +8'
                          onPress={this.giveLove}
                      />
                    </Pressable>
                  </View>
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default SecondsPage

const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#99a59f',
      height: '100%',
    },
});