import {Actions} from "react-native-router-flux";
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import React from "react";

export const Chats = () => {
    const goToHome = () => {
        Actions.Chat()
    }
    return (
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
            <Text>This is Chat</Text>
        </TouchableOpacity>
    )
}
