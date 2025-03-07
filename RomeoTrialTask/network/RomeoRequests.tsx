import RomeoResponse from "./model/RomeoProfilePaginatedResponse";
import RomeoProfile from "./model/RomeoProfileResponse";
import { Platform } from "react-native";

const baseUrl = Platform.select({
    android: "http://10.0.2.2:3000",
    default: "http://localhost:3000",
});

const getProfilesEndpoint = "/api/search?length=32"

const getProfiles = async (): Promise<RomeoProfile[]> => {
    try {
        const response = await fetch(`${baseUrl}${getProfilesEndpoint}`);
        const json = await response.json() as RomeoResponse;
        return json.items;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getProfiles;