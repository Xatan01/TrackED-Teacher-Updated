import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';

export default function Dashboard({ navigation }) {
  const router = useRouter(); 

  // Sample data for assignments
  const assignments = [
    { title: 'Math Assignment 2', due: 'Tomorrow 2PM', status: 'In Progress' },
  ];

  return (
    <View style={styles.container}>
      {/* Top panel with title container */}
      <View style={styles.titleContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#153B78" style={styles.personIcon} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Welcome,</Text>
          <Text style={styles.titleText2}>Jane</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#153B78" style={styles.bellIcon} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.headerText}>Current Questionnaire</Text>

        <View style={styles.container1}>
          {assignments.map((assignment, index) => (
            <View key={index} style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>{assignment.title}</Text>
                <Text style={styles.Text2}>Due: {assignment.due}</Text> 
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{assignment.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
          <Ionicons name="cube-outline" size={24} color="#8D8DA6" />
          <Text style={[styles.navText, { color: "#8D8DA6" }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/questionnaire')}>
          <Ionicons name="document-text" size={24} color="#0300A2" />
          <Text style={[styles.navText, { color: "#0300A2" }]}>Questionnaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/manage')}>
          <Ionicons name="people-outline" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Manage</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,      
    position: 'absolute',
    width: '100%',
    height: 118,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
  },
  content: {
    marginLeft: '3%',
    flexDirection: 'column',
  },  
  titleTextContainer: {
    flexDirection: 'column',
    justifyContent: 'left',
    marginLeft: '-35%',
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
  headerText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
    marginLeft: '5%',
    marginTop: '40%',
  },
  container1: {
    paddingTop: '5%',
    marginLeft: '2%' ,
    flexDirection: 'column',
    marginBottom: '-30%',
  },
  container2: {
    borderRadius: 35,
    backgroundColor: '#193F7B',
    width: '90%',
    paddingVertical: '10%',
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'column',
  },
  Text1: {
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  Text2: {
    fontSize: 15,
    fontStyle: 'normal',
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
    marginRight: '5%',
    alignSelf: 'flex-start',
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
    marginRight: '10%',
  },
  personIcon: {
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
});
