import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import EmojiFace from './EmojiFace';


export class LifeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        return (
            <View>
                <Text>{this.props.name}'s Life Bar:</Text>
                <View style={{width: Math.abs(this.props.number-48)*5, height: 16, backgroundColor: 'black', borderRadius: 10}}></View>
            </View>
        )
    }
}

export default LifeBar

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: '100%'
    },
});