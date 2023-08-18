import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const BasicAnimation = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      delay: 2000,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
    // Animated.parallel([
    //   Animated.spring(translation.x, {
    //     toValue: -100,
    //     useNativeDriver: true,
    //   }),
    //   Animated.spring(translation.y, {
    //     toValue: -100,
    //     useNativeDriver: true,
    //   }),
    // ]).start();
  }, [translation]);

  return (
    <>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Rajashekar</Text> */}
        <Animated.View style={styles.box(translation)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  box: (translation) => ({
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 8,
    transform: [
      { translateX: translation },
      {
        rotate: translation.interpolate({
          inputRange: [0, 100],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  }),
});

export default BasicAnimation;
