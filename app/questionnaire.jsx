import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';

export default function Dashboard({ navigation }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const assignments = [
    { title: 'Math Assignment 2', due: 'Tomorrow 2PM', status: 'In Progress' },
    { title: 'Math Assignment 3', due: '20/12/2024 2PM', status: 'Unreleased' },
    { title: 'English Assignment 2', due: '11/11/2024 2PM', status: 'Completed' },
  ];

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Top panel */}
      <View style={styles.titleContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#153B78" style={styles.personIcon} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Welcome,</Text>
          <Text style={styles.titleText2}>Jane</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#153B78" style={styles.bellIcon} />
      </View>

      {/* Search bar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Search assignments"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>

      {/* Assignments */}
      <View style={styles.container1}>
        {filteredAssignments.length === 0 && searchQuery !== '' ? (
          <Text style={styles.noResultsText}>No results found</Text>
        ) : (
          filteredAssignments.map((assignment, index) => (
            <View key={index} style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>{assignment.title}</Text>
                <Text style={styles.Text2}>Due: {assignment.due}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (assignment.title === 'Math Assignment 3') {
                    router.push('/math'); // Navigate to Biology Assignment page
                  }
                }}
              >
                <Text style={styles.buttonText}>{assignment.status}</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#0300A2',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: '5%',
    marginTop: '40%', 
    marginLeft: '0%',
    minHeight: 50, // Add a minimum height to prevent shrinking
  },
  inputText: {
    fontSize: 16,
    fontWeight: '300',
    width: '100%',
    color: '#000', // Ensure text is visible
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
  noResultsText: {
    fontSize: 16,
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 20,
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
