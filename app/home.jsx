import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Svg, Circle } from 'react-native-svg';

export default function Dashboard({ navigation }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top panel with title container */}
      <View style={styles.titleContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#153B78" style={styles.personIcon} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Welcome,</Text>
          <Text style={styles.titleText2}>Jane</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#BF2D2D" style={styles.bellIcon} />
      </View>
      {/* Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.container1} onPress={() => router.push('/assignment')}>
            <Text style={styles.titleText3}>Current Questionnaire</Text>
            <View style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>Math Assignment 2</Text>
                <Text style={styles.Text2}>Due: Tomorrow 2PM</Text>
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>In Progress</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.container1}>
            <Text style={styles.titleText3}>Today's Classes</Text>
            <ScrollView horizontal contentContainerStyle={styles.classesContainer} showsHorizontalScrollIndicator={false}>
              <View style={styles.container3}>
                <View style={styles.textContainer}>
                  <Text style={styles.Text1}>English</Text>
                  <Text style={styles.Text2}>Classroom 1</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>12PM-2PM</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.container3}>
                <View style={styles.textContainer}>
                  <Text style={styles.Text1}>Math</Text>
                  <Text style={styles.Text2}>Classroom 1</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>2.05PM-4PM</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button2} onPress={() => router.push('/schedule')}>
            <Text style={styles.buttonText2}>Class Schedule</Text>
          </TouchableOpacity>
          <View style={styles.container4}>
            <Text style={styles.titleText3}>Classes Progress</Text>
            <ScrollView 
                horizontal 
                contentContainerStyle={styles.scrollViewContainer} 
                showsHorizontalScrollIndicator={false}
            >
                {/* Array of classes with their progress */}
                {[
                    { className: 'Class A', progress: 70 },
                    { className: 'Class B', progress: 85 },
                    { className: 'Class C', progress: 50 }
                ].map((classData, index) => (
                    <View key={index} style={styles.chartContainer}>
                        <CircularProgress percentage={classData.progress} />
                        <Text style={styles.classText}>{classData.className}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cube-outline" size={24} color="#0300A2" />
          <Text style={[styles.navText, { color: "#0300A2" }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/questionnaire')}>
          <Ionicons name="document-text" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Questionnaire</Text>
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

const CircularProgress = ({ percentage }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = percentage / 100;

  return (
    <View style={styles.circularProgressContainer}>
      <Svg height="120" width="120" viewBox="0 0 120 120">
        {/* Background circle */}
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#E0E0E0" // Light gray background color
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#234F9E" // Dark blue for progress
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
          transform="rotate(-90 60 60)" // Rotate to start from the top
        />
      </Svg>
      {/* Percentage Text */}
      <Text style={styles.percentageText}>{percentage}%</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    // Add the new style for Circular Progress
    circularProgressContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginHorizontal: 20,
    },
    percentageText: {
      position: 'absolute',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#234F9E',
    },
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
  titleText3:{
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#060527',
  },
  chartAndLegend: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    justifyContent: 'flex-start',
  },
  leftChart: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 20, 
    marginBottom:15, 
    marginTop:10,  
  },
  scrollViewContent:{
    paddingBottom: 120,

  },
  container1:{
    paddingTop: '35%',
    marginLeft: '2%' ,
    flexDirection: 'column', 
    marginBottom:'-30%',
    
  },
  container2:{
    borderRadius: 35,
    backgroundColor:'#0A0932',
    width: '90%',
    paddingVertical: '10%', // Adjust the padding for better spacing
    marginTop:13,
    flexDirection: 'row',  // Change to row to align text and button horizontally
    alignItems: 'flex-start',
    paddingLeft: 20,
    justifyContent: 'space-between', // Ensure text and button are spaced apart
  },
  container3:{
    borderRadius: 30,
    backgroundColor:'#153B78',
    width: '80%',
    paddingVertical: '8%', // Adjust the padding for better spacing
    marginTop:13,
    flexDirection: 'row',  // Change to row to align text and button horizontally
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginRight:15,
    justifyContent: 'space-between', // Ensure text and button are spaced apart
  },
  classesContainer: {
    flexDirection: 'row', // Align cards horizontally
    paddingRight: '80%', // Optional: add some spacing around cards
  },
  container4:{
    paddingTop: '35%',
    marginLeft: '2%' ,
    flexDirection: 'column', 
    marginTop:'-30%',
  },
  container5:{
    borderRadius: 30,
    backgroundColor:'#303972',
    width: '90%',
    paddingVertical: '8%', // Adjust the padding for better spacing
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
  button2:{
    backgroundColor: '#060527',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 35,
    marginLeft: 'auto',
    marginRight:'10%', 
    alignSelf: 'flex-start',
    marginTop:'33%',
    zIndex:3
  },
  buttonText2: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  button3: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop:20, 
    alignSelf: 'flex-start', // Ensure the button stays aligned to the right of its container
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
  legendContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop:50,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  legendText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#060527',
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
  classText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#060527',
    marginTop: 10,  // Add margin to space it below the chart
    textAlign: 'left',
  },
  
});