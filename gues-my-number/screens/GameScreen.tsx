import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min: number, max: number /* exclude: number */) {
  return Math.floor(Math.random() * (max - min) + min);
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: { userNumber: number; onGameOver: Function }) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (direction === 'lower') {
      if (currentGuess < userNumber) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'sorry' }]);
        return;
      }
      maxBoundary = currentGuess;
    } else {
      if (currentGuess > userNumber) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'sorry' }]);
        return;
      }
      minBoundary = currentGuess + 1;
    }
    setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary));
  };

  return (
    <View style={styles.screen}>
      <Title>{"Opponent's Guess"}</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('higher')}>+</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
        </View>
      </View>
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
