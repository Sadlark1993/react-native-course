import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                props.addGoalHandler(enteredGoalText);
                setEnteredGoalText('');
                props.hideModalHandler();
              }}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={props.hideModalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    padding: 16,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
    marginTop: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
