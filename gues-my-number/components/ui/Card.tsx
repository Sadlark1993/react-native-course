import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../shared/Colors';

function Card({ children }: { children: ReactNode }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // android
    shadowColor: 'black', // ios
    shadowOffset: { width: 0, height: 2 }, // ios
    shadowRadius: 6, // ios
    shadowOpacity: 0.25, // ios
  },
});
