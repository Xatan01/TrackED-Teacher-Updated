import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState([
    { id: 1, text: "Did you get the correct answer?", type: 'scale', scale: 3, editable: false },
    { id: 2, text: "Was the question too hard?", type: 'scale', scale: 2, editable: false },
    { id: 3, text: "Did the examples help?", type: 'scale', scale: 4, editable: false },
    { id: 4, text: "Explain how you solved question 3?", type: 'text', value: '', editable: false },
  ]);

  const assignments = [
    { title: 'Math Assignment 3', due: '20/12/2024 2PM', status: 'Unreleased' },
  ];

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleEditMode = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, editable: !q.editable } : { ...q, editable: false }
      )
    );
  };

  const handleTextChange = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, text: value } : q))
    );
  };

  const handleTypeChange = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? { ...q, type: q.type === 'scale' ? 'text' : 'scale', editable: false }
          : q
      )
    );
  };

  const handleScaleChange = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, scale: value } : q))
    );
  };

  const handleOpenEndedChange = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, value: value } : q))
    );
  };

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

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerText}>Current Questionnaire</Text>

        {/* Assignments */}
        <View style={styles.container1}>
          {filteredAssignments.map((assignment, index) => (
            <View key={index} style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>{assignment.title}</Text>
                <Text style={styles.Text2}>Due: {assignment.due}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{assignment.status}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Questionnaire Section */}
        <View style={styles.questionnaireContainer}>
          {questions.map((q) => (
            <View key={q.id} style={styles.questionContainer}>
              <View style={styles.questionHeader}>
                {q.editable ? (
                  <TextInput
                    style={styles.textInput}
                    value={q.text}
                    onChangeText={(value) => handleTextChange(q.id, value)}
                  />
                ) : (
                  <Text style={styles.questionText}>{q.text}</Text>
                )}
                <TouchableOpacity onPress={() => toggleEditMode(q.id)}>
                  <Ionicons
                    name={q.editable ? 'checkmark-outline' : 'pencil-outline'}
                    size={20}
                    color="#153B78"
                  />
                </TouchableOpacity>
              </View>
              {q.editable && (
                <View style={styles.toggleContainer}>
                  <Text>Likert Scale</Text>
                  <Switch
                    value={q.type === 'scale'}
                    onValueChange={() => handleTypeChange(q.id)}
                  />
                  <Text>Open-Ended</Text>
                </View>
              )}
              {q.type === 'scale' ? (
                <View style={styles.scaleContainer}>
                  <Text>😔</Text>
                  <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    value={q.scale}
                    onValueChange={(value) => handleScaleChange(q.id, value)}
                    minimumTrackTintColor="#193F7B"
                    maximumTrackTintColor="#d3d3d3"
                    thumbTintColor="#193F7B"
                  />
                  <Text>😊</Text>
                </View>
              ) : (
                <TextInput
                  style={styles.textInput}
                  placeholder="Type your answer here..."
                  value={q.value}
                  onChangeText={(value) => handleOpenEndedChange(q.id, value)}
                />
              )}
              {q.type === 'text' && (
                <TextInput
                  style={styles.openEndedInput}
                  placeholder="Type your answer here..."
                  multiline={true}
                  value={q.value}
                  onChangeText={(value) => handleOpenEndedChange(q.id, value)}
                />
              )}
            </View>
          ))}

          <TouchableOpacity style={styles.confirmButton}onPress={() => router.push('/questionnaire')}>
            <Text style={styles.confirmButtonText}>Confirmed Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  scrollContent: {
    paddingBottom: 120, // Ensure content doesn't overlap with bottom navigation
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
        headerText: {
          marginTop: 150, // Adjusted to position below the title container
          marginHorizontal: '7%',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#153B78',
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
          minHeight: 50,
        },
        inputText: {
          fontSize: 16,
          fontWeight: '300',
          width: '100%',
          color: '#000',
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
          paddingTop: '3%',
          marginHorizontal: '5%', // Changed from marginLeft to marginHorizontal
          flexDirection: 'column',
          marginBottom: 10, // Reduced negative margin
        },
        container2: {
          borderRadius: 15, // Reduced border radius for a more modern look
          backgroundColor: '#193F7B',
          width: '100%', // Full width within the container
          paddingVertical: 15, // Reduced vertical padding
          marginTop: 13,
          flexDirection: 'row',
          alignItems: 'center', // Centered alignment
          paddingHorizontal: 20,
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
        personIcon: {
          marginRight: 'auto',
          paddingTop: '12%',
        },
        bellIcon: {
          marginLeft: 'auto',
          paddingTop: '15%',
          marginRight: '10%',
        },
        questionnaireContainer: {
          marginTop: 20, // Reduced top margin
          paddingHorizontal: '5%',
        },
        questionContainer: {
          padding: 15,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          marginBottom: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 3,
        },
        questionHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        },
        questionText: {
          fontSize: 16,
          color: '#153B78',
          flex: 1,
          marginRight: 10,
        },
        textInput: {
          borderBottomWidth: 1,
          borderBottomColor: '#d3d3d3',
          fontSize: 16,
          color: '#153B78',
          paddingVertical: 5,
          flex: 1,
        },
        toggleContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 10,
        },
        scaleContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        },
        slider: {
          flex: 1,
          marginHorizontal: 10,
        },
        confirmButton: {
          backgroundColor: '#193F7B',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 20,
        },
        confirmButtonText: {
          fontSize: 16,
          color: '#FFFFFF',
          fontWeight: 'bold',
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
        openEndedInput: {
            borderWidth: 1,
            borderColor: '#d3d3d3',
            borderRadius: 10, // Added border radius to match other container styles
            padding: 10, // Added padding for better text visibility
            fontSize: 16,
            color: '#153B78',
            marginTop: 10, // Added margin top to separate from question header
            minHeight: 100, // Increased height to make it more textarea-like
            textAlignVertical: 'top', // Aligns text to the top for multiline input
          },
      });