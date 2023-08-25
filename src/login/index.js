import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Person from '../Assets/person.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Person style={styles.userIcon} width={200} height={200} />
      <TextInput
        mode="outlined"
        outlineColor="blue"
        label="Email"
        style={styles.emailTextInput}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        mode="outlined"
        outlineColor="blue"
        label="Password"
        style={styles.emailTextInput}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <View style={styles.buttonContainer}>
        <Button labelStyle={styles.loginButton} mode="contained">
          Login
        </Button>
      </View>
      {/* <View style={styles.thirdPContainer}>
        <TouchableOpacity>
          <Icon style={styles.icon} name="facebook" color="blue" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={styles.icon} name="twitter" color="blue" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={styles.icon} name="google" color="blue" size={40} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    marginBottom: 20,
  },
  textC: {
    color: 'black',
  },
  emailTextInput: {
    width: '70%',
    marginBottom: '2%',
  },
  loginButton: {
    width: '20%',
  },
  buttonContainer: {
    width: '30%',
    marginVertical: 10,
  },
  thirdPContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '8%',
  },
  icon: {
    textAlign: 'center',
    padding: '3%',
  },
});

export default Login;
