import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

function Title({ children }: { children: ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold', // the font that we added using useFonts
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
