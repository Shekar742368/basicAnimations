import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AreaOfCircleCalculator from './AreaOfCircleCal';
import AreaOfRectangleCalculator from './AreaOfRectangleCal';

const CalculateAreas = () => {
  const [value, setValue] = useState('Circle');
  return (
    <>
      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}>
          <View style={styles.radioButtonGroup}>
            <RadioButton value="Circle" />
            <Text style={styles.text}>Circle</Text>
          </View>
          <View style={styles.radioButtonGroup}>
            <RadioButton value="Rectangle" />
            <Text style={styles.text}>Rectangle</Text>
          </View>
        </RadioButton.Group>
      </View>
      {value && value === 'Circle' ? (
        <AreaOfCircleCalculator />
      ) : (
        <AreaOfRectangleCalculator />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
  radioButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default CalculateAreas;
