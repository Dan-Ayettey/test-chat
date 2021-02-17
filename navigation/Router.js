import { TouchableOpacity, Text } from 'react-native'
import React, { Component } from 'react';
import {Actions, Tabs} from 'react-native-router-flux'
import { Router, Scene } from 'react-native-router-flux'
import {styles} from "../styles/styles";
import {View} from "react-native-web";
import {Messages} from "../screens/Messages";
import {Contacts} from "../screens/Contacts";
import {Chats} from "../screens/Chats";

export const Routes = () => (
    <Router >

        <Scene  key = "root" tintColor={styles.scene.color}  activeTintColor={'red'} swipeEnabled={true} navigationBarStyle={styles.appBar} >

            <Scene key = "Contacts"  contentComponent={<Text>Hell</Text>}  activeTintColor={styles.scene} titleStyle={styles.scene}  component = {Contacts} title = "Contacts" initial = {true} swipeEnabled={true}/>
            <Scene key = "Messages" titleStyle={styles.scene}  component = {Messages} title = "Messages" />
            <Scene key = "Chats"  titleStyle={styles.scene}  component = {Chats} title = "Chart" />
        </Scene>
    </Router>
)






