import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RomeoProfileImage from './components/RomeoProfileImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <RomeoProfileImage url="https://picsum.photos/424/424"/>

      <RomeoProfileImage url="https://loremflickr.com/424/424/gay,man/all?lock=516"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
