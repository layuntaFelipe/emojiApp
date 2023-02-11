import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, Pressable, TextInput } from 'react-native';

export class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojigotchiName: '',
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{margin: 40}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 30}}>Hello there! This is your little eletronic pet.</Text>
                    <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 30}}>Your goal is simple: Don't let it die!</Text>
                    <Text>Name your Emojigotchi:</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, borderRadius: 10, marginBottom: 20}}
                        onChangeText={(value) => this.setState({emojigotchiName: value})}
                        value={this.state.emojigotchiName}
                    />
                    <Text style={{fontSize: 15, marginBottom: 10}}>You have three different buttons to take care of your Emojigotchi:{`\n`}1- "Give Attention" button that gives 1 point back to the life bar.{`\n`}2- "Give Food" button that gives 5 point back to the life bar.{`\n`}3- "Give Love" button that gives 8 point back to the life bar.{`\n`}- You also have the feature to collect the poop of your eletronic pet, for that, just touch the lil' poop icon, collecting poop does not increase the pets life due to the fact that you can poop even if you're are sad or angry.</Text>
                    <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 50}}>Good Luck!</Text>
                    <Pressable style={{backgroundColor: 'black', height: 45, width: 300, borderRadius: 10, marginTop: 30, justifyContent: 'center', marginLeft:15}}>
                        <Button
                        title="Go to Emojigotchi"
                        color='white'
                        onPress={() => this.props.navigation.navigate('SecondsPage', {name: this.state.emojigotchiName})}
                        />
                    </Pressable>
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default FirstPage


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#99a59f',
      height: '100%',
    },
  });