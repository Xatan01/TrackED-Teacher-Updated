import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();
  const [questions, setQuestions] = useState([
    { id: 1, text: "Question 1: Did you get the correct answer?", scale: 3 },
    { id: 2, text: "Question 2: Was the question too hard?", scale: 2 },
    { id: 3, text: "Question 3: Did the examples help?", scale: 4 },
    { id: 4, text: "Explain how you solved question 3?", scale: 0, isTextInput: true },
  ]);

  const assignments = [
    {
      title: 'Math Assignment 3',
      due: '20/12/2024',
      status: 'Unreleased',
    },
  ];

  const handleScaleChange = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, scale: value } : q))
    );
  };

  const handleTextChange = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, textInputValue: value } : q))
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#153B78" style={styles.personIcon} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Welcome,</Text>
          <Text style={styles.titleText2}>Jane</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#153B78" style={styles.bellIcon} />
      </View>

      <View style={styles.content}>
        <Text style={styles.headerText}>Unreleased Questionnaire</Text>

        {/* Math Assignment 3 Container */}
        <View style={styles.container1}>
          {assignments.map((assignment, index) => (
            <View key={index} style={styles.assignmentContainer}>
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

        {/* Questions */}
        {questions.map((q, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionText}>{q.text}</Text>
            {!q.isTextInput ? (
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
                value={q.textInputValue || ""}
                onChangeText={(value) => handleTextChange(q.id, value)}
              />
            )}
          </View>
        ))}

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
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
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextContainer: {
    marginLeft: 10,
  },
  titleText: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  titleText2: {
    fontSize: 16,
    color: '#060527',
  },
  bellIcon: {
    marginLeft: 'auto',
  },
  content: {
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  container1: {
    paddingVertical: 20,
  },
  assignmentContainer: {
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
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  scaleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#193F7B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
