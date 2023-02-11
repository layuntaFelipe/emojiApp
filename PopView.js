import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import popImage from './assets/poop-solid.png';


export class PopView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poops: []
        };
    };

    showPoop = (number) => {
        let poopArray = [];
        for (let index = 0; index < number; index++) {
            poopArray.push(<Image
                style={{height: 30, width: 30, margin: 5}}
                source={popImage}
            />);
        }
        this.setState({poops: poopArray});
    }

    componentDidMount() {
        // timerID becomes a property of this component
        this.timerID = setInterval(
          () => this.tick(), 8000
        );
        console.log(this.props)
    }

    tick() {
        if(this.state.poops.length < 5 && this.props.number < 47){
            let poopArray = this.state.poops;
            poopArray.push(<Image
                style={{height: 30, width: 30, margin: 5}}
                source={popImage}
            />);
            this.setState({poops: poopArray});
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    collectPoop = () => {
        let poopArray = this.state.poops;
        poopArray.pop();
        this.setState({poops: poopArray});
    }

    render() {
        return (
            <View>
                <View style={{margin: 10}}>
                    {
                        this.state.poops.length !== 0 && (
                            this.state.poops.map((item, index) => {return (
                                <View key={index}>
                                    <Pressable onPress={this.collectPoop}>
                                        {item}
                                    </Pressable>
                                </View>
                            )})
                        )
                    }
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default PopView


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: '100%'
    },
});