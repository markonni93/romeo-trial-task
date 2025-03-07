import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import getProfiles from './network/RomeoRequests';
import RomeoProfileUiItem from './components/RomeoProfileItem';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileModel from './model/ProfileModel';

export default function App() {

  const [data, setData] = useState<ProfileModel[]>([]);

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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <RomeoProfileUiItem profile={item} />
            )}
          />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
