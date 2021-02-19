import { Actions } from "react-native-router-flux";
import React, {useRef, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
    VirtualizedList,
  ImageBackground,
  ScrollView,
    Image,
    ImageComponent,
    Modal,
    SafeAreaView,
  TextInput, TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {FontAwesome, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import Icon from "react-native-vector-icons/FontAwesome5";
import {User} from "../mediators/User";


function Message () {
                return( <View  style={{flexDirection:'row',alignSelf:'flex-end'}}>

                    <View  style={{width:'auto',flexDirection:'row',alignItems:'flex-start',marginBottom:10,borderRadius:40,backgroundColor:'rgb(242,243,245)',padding:4}}>
                        <Image style={{width:40,height:40}} source={require('../assets/user.png')}/>
                        <View>
                            <Text style={{flex:1,color:'black',borderRadius:20,margin:4,padding:10}} >
                                {"Hool" +
                                ""}

                            </Text>
                        </View>

                    </View>
                </View> )

}


const Messenger = (props) => {
    return (
        <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
            <View  style={{flexDirection:'row',marginBottom:10,margin:6, borderRadius:40,backgroundColor:'rgb(242,243,245)',padding:4}}>
                <Image style={{width:40,height:40}} source={require('../assets/user.png')}/>
                <View>
                    <Text style={{flex:1,color:'black',borderRadius:20,margin:4,padding:10}} >
                        {props.text}
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
  const user=new User("Dan Ayettey");

 const [receiver,setReceiver]=useState(user.getUserName().toString())

    const johan=new User('Johan');
   const   [sender,setSender]=useState(user.getUserName().toString())
    let [messageStack,setMessageStack]=useState({ users:[]})
    const   [scrollToView,setScrollToView]=useState()
    //appendedCompsCount: this.state.appendedCompsCount + 1
    let   [count,setCount]=useState(0)

   const AddUser = () => {


        setMessageStack({
            users: [...messageStack.users, <Messenger key={count} text={user.getUserText()}/>]
        })
       setCount(count+1);

    }

  let placeholder = "Enter  message" + ":";
    const scrollRef = useRef();

    return (
    <View style={styles.container}>
        <ScrollView ref={scrollRef}
            contentContainerStyle={{
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end'

            }} style={{width:'100%'}}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollsToTop={scrollToView} onContentSizeChange={scrollToView}>
            <View  />
            <View  />
            <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
            <View  style={{flexDirection:'row',marginBottom:10,margin:6, borderRadius:40,backgroundColor:'rgb(242,243,245)',padding:4}}>
                <Image style={{width:40,height:40}} source={require('../assets/user.png')}/>
                <View>
                    <Text style={{flex:1,color:'black',borderRadius:20,margin:4,padding:10}} >
                        {user.sendMessage("Hej Johan").message}
                    </Text>
                </View>

            </View>
            </View>

            {messageStack.users}

        </ScrollView>
        <View  style={{
            borderTopColor:'rgb(238,239,239)',
            borderTopWidth: 1,
            paddingTop:2,
    }}>

        <View
            style={{
                backgroundColor: "rgb(242,243,245)",
                marginTop:4,
                height: 50,
                borderRadius: 100,
                marginBottom: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
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


                        user.setUserText(text)})}

                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={((event) =>{
                    AddUser()
                    user.setUserText("")

                    scrollRef.current?.scrollToEnd({
                        x : 0,
                        animated : true
                    });

                })}>
                    <Image name={'send'} style={{width:40,height:30}} source={require('../assets/send-512.webp')}/>
                </TouchableOpacity>
            </View>
        </View>

    </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
