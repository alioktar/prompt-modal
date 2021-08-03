import React from 'react';
import {View, Animated, StyleSheet, Modal} from 'react-native';

const PromptModal = ({open = false, modalHeight = 300, children}) => {
  const animValue = React.useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setVisible(true);
      Animated.timing(animValue, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animValue, {
        duration: 200,
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
      });
    }
  }, [open, animValue]);

  const bgAnimStyle = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    opacity: animValue,
  };

  const promptAnimStyle = {
    transform: [
      {
        translateY: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [modalHeight, 0],
        }),
      },
    ],
  };

  return (
    <Modal transparent={true} visible={visible}>
      <View style={[styles.wrapper]}>
        <View style={{flex: 1}} />
        <Animated.View
          style={[styles.prompt, {height: modalHeight}, promptAnimStyle]}>
          {children}
        </Animated.View>
        <Animated.View style={[styles.promptBg, bgAnimStyle]} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  promptBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  prompt: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    zIndex: 2,
  },
});

export default PromptModal;
