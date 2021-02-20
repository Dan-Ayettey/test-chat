import { Actions } from "react-native-router-flux";
import React, {useRef, useState} from "react";
//imports
import {
  StyleSheet,
  View,
  Text,
    VirtualizedList,
  ImageBackground,
  ScrollView,
    Image,
    Alert,
    ImageComponent,
    Modal,
    SafeAreaView,
  TextInput, TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Clipboard from '@react-native-community/clipboard';
import {FontAwesome, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import Icon from "react-native-vector-icons/FontAwesome5";
import {User} from "../mediators/User";
import {styles} from "../styles/styles"






const Messenger = (props) => {
    const clipboardOptions=(text)=> {
        Clipboard.setString('hlooo')
    }
    const fetchClipboardText=async ()=> {
        return  await Clipboard.getString()
    }

    const [text,setText]=useState({date:'',message:''})
    const [isEnable,setIsEnable]=useState(false)

    return (
        <View style={styles.messageContainer}>
            <View  style={styles.messageContainerChild} >
                <Image style={{width:40,height:40}} source={require('../assets/user.png')}/>
                <View >
                        <Text selectable style={styles.messageContainerChildTextMessage}  >
                            {props.text.user+'\n'+ props.text.message}
                        </Text>
                </View>

            </View>
        </View>
    )
}
export function Chats () {
  const goToHome = () => {
    Actions.Chat();
  };
  const user=new User(` ${new Date().toLocaleDateString()}  ${new Date().toLocaleTimeString()}`);

 const [receiver,setReceiver]=useState(user.getUserName().toString())

    const johan=new User('Johan');
   const   [sender,setSender]=useState(user.getUserName().toString())
    let [messageStack,setMessageStack]=useState({ users:[]})
    const   [scrollToView,setScrollToView]=useState()
    const [messageState,setMessageState]=useState((() => {}))
    const [message,setMessage]=useState({})
    let [editorValue,setEditorValue]=useState('')
    //appendedCompsCount: this.state.appendedCompsCount + 1
    let   [count,setCount]=useState(0)

   const AddUser = () => {


        setMessageStack({
            users: [...messageStack.users, <Messenger key={count} text={message}/>]
        })
       setCount(count+1);

    }

  let placeholder = "Enter  message" + ":";
    const scrollRef = useRef();

    return (
    <View style={styles.container}>
        <ScrollView ref={scrollRef}
            contentContainerStyle={styles.scrollContainer} style={{width:'100%'}}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollsToTop={scrollToView} onContentSizeChange={scrollToView}>
            <View  />
            <View  />
            <View style={styles.receiverContainer}>
            <View  style={styles.receiverContainerChild}>
                <Image style={{width:40,height:40}} source={require('../assets/user.png')}/>
                <View>
                    <Text style={styles.receiverMessage} >
                        {user.sendMessage("Hej Johan").message}
                    </Text>
                </View>

            </View>
            </View>

            {messageStack.users}

        </ScrollView>
        <View  style={styles.chatInputContainer}>

        <View
            style={styles.chatInputContainerChild}
        >
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={'user'} size={40}/>
                </TouchableOpacity>
                <TextInput
                    style={{ marginLeft: 10 ,width:260,padding:4 }}
                    placeholderTextColor='black'
                    placeholder={placeholder}
                    onChangeText={(text =>  {
                        setMessageState(() =>{
                            scrollRef.current?.scrollToEnd({
                            x : 0,
                            animated : true
                        });
                            setMessage(user.sendMessage(text))
                            user.setUserText(text)
                        })

                        setEditorValue(text)
                    })}
                value={editorValue}/>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={(event =>{
                    AddUser()
                    setMessageState(() =>{
                        scrollRef.current?.scrollToEnd({
                            x : 0,
                            animated : true
                        });
                        setMessage(user.sendMessage(message.message))
                        user.setUserText(message)

                    })

                    setTimeout(()=>{

                            scrollRef.current?.scrollToEnd({
                                x : 0,
                                animated : true
                            });
                        clearInterval(this)
                    },50)

                    setEditorValue('')

                })}>
                    <Image name={'send'} style={{width:40,height:30}} source={require('../assets/send-512.webp')}/>
                </TouchableOpacity>
            </View>
        </View>

    </View>

    </View>
);
}



