import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RomeoProfileImage from './components/RomeoProfileImage';
import React, { useEffect, useState } from 'react';
import RomeoProfile from './network/model/RomeoProfileResponse';
import getProfiles from './network/RomeoRequests';

export default function App() {

  const [data, setData] = useState<RomeoProfile[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const profiles = await getProfiles();
        setData(profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <View style={styles.container}>
      <RomeoProfileImage url="https://picsum.photos/424/424" />
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Text style={{ color: 'black', fontSize: 13 }}>
            {item.name} some text
          </Text>
        )}
      />

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
