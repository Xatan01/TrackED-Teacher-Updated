import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import WaveInput from '../Utils/WaveInput'; // Adjust the path as necessary
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen({ }) {
  // Define state variables
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("Please check your ID and Password");
  const [email, setEmail] = useState(""); // For email input
  const [password, setPassword] = useState(""); // For password input
  const router = useRouter(); 
  
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
        <View style={styles.overlay}></View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalMessage}</Text>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Background Image */}
      <Image 
        source={require('../assets/images/background.png')} 
        style={styles.backgroundImage} 
        resizeMode="cover" 
      />

      {/* Content */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TrackED</Text>
      </View>
      <View style={styles.inputContainer}>
        <WaveInput
          icon='person'
          label="  Teacher ID "
          secureTextEntry={false}
          value={email}
          onValueChange={setEmail} // Pass setEmail to update the email state
        />
        <WaveInput
          icon='lock'
          label="  Password "
          secureTextEntry={true}
          value={password}
          onValueChange={setPassword} // Pass setPassword to update the password state
        />
      </View>

      <TouchableOpacity style={styles.Button} onPress={() => router.push('/home')}>
        <Text style={styles.ButtonText}>LOGIN  </Text>
        <MaterialIcons name="arrow-forward" size={30} color='#FFFFFF' />
      </TouchableOpacity>
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '-15%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '105%',
    resizeMode: 'cover',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '10%',
    paddingTop: '75%',
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'Roboto',
    paddingBottom: 5,
    color:'#FFFFFF',
    left:90
  },
  inputContainer: {
    width: '80%', // 80% of the screen width
    marginLeft: '10%', // center it horizontally
    marginTop: '30%',
  },
  debugText: {
    marginTop: 10,
    paddingLeft: '10%',
    fontSize: 16,
    color: '#737373',
  },
  Button: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    bottom: '15%',
    right: 40,
    width:'80%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  ButtonText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '200',
    
  },
  errorMessage: {
    color: '#153B78',
    marginTop: 10,
    marginLeft: '10%',
    fontFamily: 'Roboto',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gray overlay with 50% opacity
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
    elevation: 8
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#153B78",
  },
  buttonClose: {
    backgroundColor: "#153B78",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '200',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '200',


  }
});