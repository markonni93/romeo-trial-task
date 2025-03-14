import { View, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ProfileModel from "../model/ProfileModel";
import getProfiles from "../network/RomeoRequests";
import RomeoProfileUiItem from "../components/RomeoProfileItem";
import { SafeAreaView } from "react-native-safe-area-context";

function RadarScreen() {
  const [data, setData] = useState<ProfileModel[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProfiles = async () => {
    try {
      const profiles = await getProfiles();
      setData(profiles);
      setRefreshing(false);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchProfiles();
  }, []);

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <RomeoProfileUiItem profile={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default RadarScreen;
