import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min: number, max: number /* exclude: number */) {
  return Math.floor(Math.random() * (max - min) + min);
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: { userNumber: number; onGameOver: Function }) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  // Executes once when the component mounts (rendered for the first time)
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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

    const guess = generateRandomBetween(minBoundary, maxBoundary);
    setCurrentGuess(guess);
    setGuessRounds((prevGuessRounds) => [guess, ...prevGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>{"Opponent's Guess"}</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem RoundNumber={guessRounds.length - itemData.index} guess={itemData.item} />
          )}
          keyExtractor={(item) => item.toString()}
        />
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
  InstructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
