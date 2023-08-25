import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AreaOfRectangleCalculator = () => {
  const [length, setLength] = useState(undefined);
  const [width, setWidth] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [result, setResult] = useState(undefined);

  const calculateArea = useCallback(() => {
    if (length && width) {
      const area = (length * width).toFixed(2);
      setResult(area);
    } else {
      setErrorMessage('Fill required details');
      setTimeout(() => {
        setErrorMessage(undefined);
      }, 2000);
    }
  }, [length, width]);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Area Of Rectangle Calculator</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter Lenth"
          label="Length"
          value={length}
          mode="outlined"
          style={styles.inputStyle}
          textColor="black"
          onChangeText={(value) => {
            setResult(undefined);
            setLength(value);
          }}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter Width"
          label="Width"
          value={width}
          mode="outlined"
          style={styles.inputStyle}
          textColor="black"
          onChangeText={(value) => {
            setResult(undefined);
            setWidth(value);
          }}
        />
        <Text style={styles.error}>{errorMessage}</Text>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => calculateArea()}>
          Calculate Area Of Rectangle
        </Button>
        {result ? (
          <View style={styles.resultContainer}>
            <Text style={styles.interestValue}>
              Area of Rectangle is {result}
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

export default AreaOfRectangleCalculator;
