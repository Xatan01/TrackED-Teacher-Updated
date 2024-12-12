import React , {useState} from 'react';
import { View, Text, StyleSheet, Modal,TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';

export default function Dashboard({ navigation }) {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      {/* Top panel with title container */}
      <View style={styles.titleContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#153B78" style={styles.personIcon} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Welcome,</Text>
          <Text style={styles.titleText2}>Timmy</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#153B78" style={styles.bellIcon} />
      </View>
      {/* Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
        <Text style={styles.titleText3}>Current Questionnaire</Text>

        <View style={styles.container1}>
            <TouchableOpacity style={styles.container2} onPress={()=> router.push('/chat')}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>Ms Jane Doe</Text>
                <Text style={styles.Text2}>MATH, Staff room 1</Text> 
              </View>
              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>jane@sch.com</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container2} onPress={()=> router.push('/chat2')}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>Mr Smith</Text>
                <Text style={styles.Text2}>ENGLISH, Staff room 2</Text> 
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>smith@sch.com</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container2} onPress={()=> router.push('/chat3')}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>Mr Tan</Text>
                <Text style={styles.Text2}>BIOLOGY, Staff room 3</Text> 
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>tan@sch.com</Text>
              </View>
            </TouchableOpacity>
          </View>

          </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cube-outline" size={24} color="#8D8DA6" />
          <Text style={[styles.navText, { color: "#8D8DA6" }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/questionnaire')}>
          <Ionicons name="document-text" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Questionnaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/manage')}>
          <Ionicons name="people-outline" size={24} color="#0300A2" />
          <Text style={[styles.navText, { color: "#0300A2" }]}>Manage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/report')}>
          <Ionicons name="clipboard-outline" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
      },
      filterOption: {
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      },
      filterText: {
        fontSize: 16,
        color: '#060527',
      },
      closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#060527',
        borderRadius: 5,
      },
      closeButtonText: {
        color: '#fff',
        fontSize: 16,
      },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0300A2', // Blue border color
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: '5%',
    marginTop: '35%', 
    marginLeft:'0%'
  },
  inputText: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft:'4%'

  },

  
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',  // White background for the box
    borderRadius: 15,         // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,      
    position: 'absolute',
    width: '100%',
    height: 118,
    zIndex: 1,               // Ensures it stays above other content
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
  },
  content:{
    marginLeft:'3%',
    flexDirection: 'column',
  },  
  titleTextContainer: {
    flexDirection: 'column',  // Stack titleText and titleText2
    justifyContent: 'left',
    marginLeft:'-35%',
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '200',  
    color: '#7C7C7C',
    paddingTop: '12%',
  },
  titleText2: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500', 
    color: '#060527',
    paddingTop: 3,    
  },

  scrollViewContent:{
    paddingBottom: 120,

  },
  container1:{
    paddingTop: '5%',
    marginLeft: '2%' ,
    flexDirection: 'column', 
    marginBottom:'-30%',
    
  },
  container2:{
    borderRadius: 35,
    backgroundColor:'#193F7B',
    width: '90%',
    paddingVertical: '10%', // Adjust the padding for better spacing
    marginTop:13,
    flexDirection: 'row',  // Change to row to align text and button horizontally
    alignItems: 'flex-start',
    paddingLeft: 20,
    justifyContent: 'space-between', // Ensure text and button are spaced apart
  },
  textContainer: {
    flexDirection: 'column',  // Stack the texts vertically
  },
  Text1:{
    fontSize: 20,
    fontStyle:'normal',
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontWeight: '700', 
  },
  Text2:{
    fontSize: 15,
    fontStyle:'normal',
    fontFamily: 'Roboto',
    color: '#8D8DA6',
  },
  button: {
    zIndex: 10, 
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight:'5%', 
    alignSelf: 'flex-start', // Ensure the button stays aligned to the right of its container
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  bellIcon: {
    marginLeft: 'auto',
    paddingTop: '15%',
    marginRight:'10%',
  },
  personIcon:{
    marginRight: 'auto',
    paddingTop: '12%',
  },

  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    addingTop: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#8D8DA6',
    marginTop: 5,
    textAlign: 'center',
  },
  titleText3:{
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#060527',
    marginTop: 150,
  },
});
