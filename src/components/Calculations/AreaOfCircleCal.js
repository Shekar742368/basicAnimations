import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AreaOfCircleCalculator = () => {
  const [radius, setRadius] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [result, setResult] = useState(undefined);

  const calculateArea = useCallback(() => {
    if (radius) {
      const area = (3.14159 * Math.pow(radius, 2)).toFixed(2);
      setResult(area);
    } else {
      setErrorMessage('Fill required details');
      setTimeout(() => {
        setErrorMessage(undefined);
      }, 2000);
    }
  }, [radius]);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Area Of Circle Calculator</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter Circle Radious"
          label="Radious"
          value={radius}
          mode="outlined"
          style={styles.inputStyle}
          textColor="black"
          onChangeText={(value) => {
            setResult(undefined);
            setRadius(value);
          }}
        />
        <Text style={styles.error}>{errorMessage}</Text>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => calculateArea()}>
          Calculate Area Of Circle
        </Button>
        {result ? (
          <View style={styles.resultContainer}>
            <Text style={styles.interestValue}>
              Area of Circle with {radius} is {result}
            </Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: 'center',
    marginTop: '5%',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    margin: 10,
    borderRadius: 20,
  },
  inputStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  buttonStyle: {
    width: '75%',
    alignSelf: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: '10%',
    alignSelf: 'center',
  },
  interestValue: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AreaOfCircleCalculator;
