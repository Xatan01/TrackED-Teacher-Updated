// WaveInput.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const WaveInput = ({ icon, label, value, onValueChange, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValues = Array.from(label).map(() => new Animated.Value(0));

  useEffect(() => {
    if (isFocused && value === '') {
      const animations = animatedValues.map((animatedValue, index) =>
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 200,
          delay: index * 50, // staggered delay
          useNativeDriver: false,
        })
      );

      Animated.stagger(0.001, animations).start();
    } else if (!isFocused && !value){
      const animations = animatedValues.map((animatedValue) =>
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 50,
          useNativeDriver: false,
        })
      );

      Animated.parallel(animations).start();
    }
  }, [isFocused]);

  const handleTextChange = (text) => {
    onValueChange(text); // Update value via onValueChange
  };

  const renderLabel = () => {
    return Array.from(label).map((char, index) => {
      const animatedStyle = {
        position: 'absolute',
        fontFamily: 'Roboto',
        fontWeight: 200,
        top: animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: [15, -10],
        }),
        fontSize: animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: [16, 12],
        }),
        color: animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: ['#FFFFFF', '#FFFF90'],
        }),
        left: index * 16, // fixed left position increment
      };

      return (
        <Animated.Text key={index} style={animatedStyle}>
          {char}
        </Animated.Text>
      );
    });
  };

  const barStyle = {
    width: animatedValues[0].interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelIconContainer}>
        <MaterialIcons name={icon} size={15} color="#FFFFFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={handleTextChange}
          secureTextEntry={secureTextEntry}
          value={value}
        />
      </View>
      <View style={styles.labelContainer}>{renderLabel()}</View>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, barStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 30,
    width: '100%',
  },
  input: {
    fontSize: 16,
    paddingBottom:20,
    fontFamily: 'Roboto',
    //fontWeight: '200',
    fontColor: '#FFFFFF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    backgroundColor: 'transparent',
    flex: 1, // Take remaining space
  },
  labelIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    paddingBottom: 5,
    color: '#FFFFFF',
  },
  labelContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  barContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#FFFFFF',
  },
  bar: {
    height: 2,
    backgroundColor: '#FFFFFF',
  },
});

export default WaveInput;