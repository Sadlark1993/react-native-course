import { Text, StyleSheet } from 'react-native';
import Colors from '../../shared/Colors';
import { ReactNode } from 'react';

function InstructionText({ children, style }: { children: ReactNode; style?: object }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
