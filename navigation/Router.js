import { TouchableOpacity, Text } from 'react-native'
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { Router, Scene } from 'react-native-router-flux'
import {styles} from "../styles/styles";



function Messages() {
    const goToChat = () => {
        Actions.Chat()
    }
    return (
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToChat}>
            <Text>This is ABOUT Message</Text>
        </TouchableOpacity>
    )
}

export const Routes = () => (
    <Router >

        <Scene contentComponent={<Text>Hell</Text>}  key = "root" tintColor={styles.scene.color}  activeTintColor={'red'} swipeEnabled={true} navigationBarStyle={styles.appBar} >
            <Scene key = "Contacts"   activeTintColor={styles.scene} titleStyle={styles.scene}  component = {Contacts} title = "Contacts" initial = {true} swipeEnabled={true}/>
            <Scene key = "Messages" titleStyle={styles.scene}  component = {Messages} title = "Messages" />
            <Scene key = "Chat"  titleStyle={styles.scene}  component = {Chat} title = "Chart" />
        </Scene>
    </Router>
)

const Contacts = () => {
    const goToContacts = () => {
        Actions.Messages()
    }
    return (
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToContacts}>
            <Text>This is CONTACT</Text>
        </TouchableOpacity>
    )
}




const Chat = () => {
    const goToHome = () => {
        Actions.Messages()
    }
    return (
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
            <Text>This is Chat</Text>
        </TouchableOpacity>
    )
}
