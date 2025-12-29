import { Text, StyleSheet } from 'react-native';
import Colors from '../../shared/Colors';
import { ReactNode } from 'react';

function InstructionText({ children }: { children: ReactNode }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
