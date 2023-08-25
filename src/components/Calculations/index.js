import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const list = [
  { key: 'SIC', name: 'Simple Interest Calculator' },
  { key: 'AC', name: 'Area Calculator' },
];

const CalculationsList = () => {
  const navigation = useNavigation();

  const onPressItem = useCallback(
    ({ key }) => {
      switch (key) {
        case 'SIC':
          navigation.navigate('SimpleInterestCalculator');
          break;
        case 'AC':
          navigation.navigate('CalculateAreas');
          break;
        default:
          break;
      }
    },
    [navigation],
  );

  const render = useCallback(
    (item) => {
      return (
        <TouchableOpacity onPress={() => onPressItem(item)}>
          <View style={styles.flatListContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [onPressItem],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={({ name }) => name.toString()}
        renderItem={({ item }) => render(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '5%',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginHorizontal: 10,
  },
  flatListContainer: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginVertical: 4,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});

export default CalculationsList;
