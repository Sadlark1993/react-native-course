import { Image, Text, View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../shared/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Number of rounds: <Text style={styles.highlight}>X</Text>
        </Text>
        <Text style={styles.summaryText}>
          Number was: <Text style={styles.highlight}>Y</Text>
        </Text>
      </View>
      <PrimaryButton onPress={() => {}}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  highlight: { fontFamily: 'open-sans-bold', color: Colors.primary500 },
});
