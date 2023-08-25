import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const SimpleInterestCalculator = () => {
  const [capital, setCapital] = useState(undefined);
  const [interestRate, setInterestRate] = useState(undefined);
  const [months, setMonths] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [interestValue, setInterestValue] = useState(undefined);

  const calculateInterest = useCallback(() => {
    if (capital && interestRate && months) {
      setInterestValue(undefined);
      const interest = (capital * months * interestRate) / 100;
      setInterestValue(interest);
    } else {
      setErrorMessage('Please Enter Required Details');
      setTimeout(() => {
        setErrorMessage(undefined);
      }, 2000);
    }
  }, [capital, interestRate, months]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Interest Calculator</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter Capital Amount"
          label="Capital"
          value={capital}
          mode="outlined"
          style={styles.inputStyle}
          textColor="black"
          onChangeText={(value) => {
            setInterestValue(undefined);
            setCapital(value);
          }}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter Interest Rate"
          label="InterestRate"
          value={interestRate}
          mode="outlined"
          style={styles.inputStyle}
          textColor="black"
          onChangeText={(text) => {
            setInterestValue(undefined);
            setInterestRate(text);
          }}
        />
        <TextInput
          keyboardType="number-pad"
          placeholder="How many Months"
          label="Months"
          value={months}
          mode="outlined"
          style={styles.inputStyle}
          textColor="black"
          onChangeText={(text) => {
            setInterestValue(undefined);
            setMonths(text);
          }}
        />
        <Text style={styles.error}>{errorMessage}</Text>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => calculateInterest()}>
          Calculate Simple Interest
        </Button>
      </View>
      {interestValue ? (
        <View style={styles.resultContainer}>
          <Text style={styles.interestValue}>
            Interest of {capital} with {interestRate}% is {interestValue}
          </Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: '4%',
    height: 45,
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginHorizontal: 10,
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

export default SimpleInterestCalculator;
