import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#3484ff",
    paddingTop: 20,
    height: 79,
  },
  scene: {
    color: "white",
  },
  tintColor: {
    color: "orange",
  },
  addIconAppBar:{
    color:'white',
    fontSize:26,
    marginRight:26
  },
  iconDefaultSize:{
    fontSize:16,
  },
 addButton:{
    padding:4,
   backgroundColor:"#3484ff",
   borderRadius:20,
 },
  iconColor:{
    fontSize:26,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputs: {
    width: 290,
    padding:8,
    marginTop: 6,
    marginBottom: 6,
    borderWidth:1,
    borderColor: "#2196F3",
    borderRadius:4,
  },
  inputsContainer: {
    flex:1,

  },

  deviceContact: {
    flexDirection:'row',
    margin: 1,
    justifyContent: 'space-evenly',
    paddingTop: 6,
    paddingBottom:6,
      alignContent:'center',
      alignSelf:'center',
    alignItems:'center'
  },
  plusHolder: {
    backgroundColor:'#2196F3',
    marginLeft:20,
    borderRadius:20,
    paddingTop:6,
    paddingBottom: 6,
    paddingLeft:8,
    paddingRight:8
  },
  add: {
    color:'white'
  },
    plusContainer: {
      flexDirection: 'row',
        marginTop:4,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center'

    },
    plusTitle: {
    margin:10,

    },
    addToContact: {
      width:110,
        textAlign:'center',
        padding:12,
        borderRadius:4,
      backgroundColor:'#2196F3'
    },
    addToContactTitle:{
      color:'white'
    }

});
