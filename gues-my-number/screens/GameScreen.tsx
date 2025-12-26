import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min: number, max: number /* exclude: number */) {
  return Math.floor(Math.random() * (max - min) + min);
}

function GameScreen({ userNumber }: { userNumber: number }) {
  const initialGuess = generateRandomBetween(1, 100);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>{"Opponent's Guess"}</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
