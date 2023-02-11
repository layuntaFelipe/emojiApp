import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

import faceWink from './assets/face-grin-tongue-wink-solid.png';
import happyFace from './assets/face-smile-solid.png';
import mehFace from './assets/face-meh-solid.png';
import sadFace from './assets/sad-tear-solid.png';
import sadCryFace from './assets/face-sad-cry-solid.png';
import dizzyFace from './assets/face-dizzy-solid.png';
import angryFace from './assets/face-angry-solid.png';

const emojiObject = [
  {
    name: 'Face-Wink',
    emoji: (<Image
      style={{height: 290, width: 290}}
      source={faceWink}
    />),
  },
  {
    name: 'Happy-Face',
    emoji: (<Image
      style={{height: 290, width: 290}}
      source={happyFace}
    />),
  },
  {
    name: 'Meh-Face',
    emoji: (<Image
      style={{height: 290, width: 290}}
      source={mehFace}
    />),
  },
  {
    name: 'Angry-Face',
    emoji: (<Image
      style={{height: 290, width: 290}}
      source={angryFace}
    />),
  },
  {
    name: 'Sad-Face',
    emoji: (<Image
      style={{height: 290, width: 290}}
      source={sadFace}
    />),
  },
  {
    name: 'Sad-Cry-FAce',
    emoji: (<Image
      style={{height: 290, width: 290}}
      source={sadCryFace}
    />),
  },
  {
    name: 'Dizzy-Face',
    emoji: (<Image
      style={{height: 290, width: 290}}
      source={dizzyFace}
    />),
  }
]

export class EmojiFace extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <View>
                <View>
                    {
                      this.props.number <= 48 && emojiObject[Math.trunc(this.props.number/7)].emoji
                    }
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default EmojiFace


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: '100%'
    },
  });