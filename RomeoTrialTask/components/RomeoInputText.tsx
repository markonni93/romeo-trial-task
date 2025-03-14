import { TextInput, StyleSheet } from "react-native";

function RomeoInputText() {
  return <TextInput style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    backgroundColor: "#1E1E1E",
    height: 40,
    marginBottom: 16,
    marginHorizontal: 32,
    paddingTop: 8,
    paddingStart: 16,
    paddingBottom: 8,
    paddingEnd: 8,
  },
});

export default RomeoInputText;
