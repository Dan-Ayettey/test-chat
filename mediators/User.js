import {ChatRoom} from "./ChatRoom";

export class User{

    constructor(userName) {
        this.userName=userName
    }
     setUserName(userName){
        this.userName=userName;
     }
    getUserName(){
       return  this.userName;
    }
    setUserText(text){
        this.text=text;
    }
    getUserText(){

        return  this.text;
    }
     sendMessage=function(message){
       return   ChatRoom.showMessage(this,message)
    }
}

