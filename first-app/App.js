import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((current) => [
      ...current,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((current) => {
      return current.filter((goal) => goal.id !== id);
    });
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setModalIsVisible(true)}
        />

        <GoalInput
          addGoalHandler={addGoalHandler}
          onCancel={() => setModalIsVisible(false)}
          visible={modalIsVisible}
          hideModalHandler={hideModalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(listItem) => {
              return (
                <GoalItem
                  text={listItem.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                  id={listItem.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
