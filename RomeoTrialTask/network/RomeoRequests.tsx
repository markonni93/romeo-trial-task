import ProfileModel from "../model/ProfileModel";
import RomeoProfileDetailResponse from "./model/RomeoProfileDetailResponse";
import RomeoResponse from "./model/RomeoProfilePaginatedResponse";
import { Platform } from "react-native";

const baseUrl = Platform.select({
    android: "http://10.0.2.2:3000",
    default: "http://localhost:3000",
});

const getProfilesEndpoint = "/api/search?length=32"
const getProfileDetailsEndpoint = "/api/profiles?"

const getProfiles = async (): Promise<ProfileModel[]> => {
    try {
        const profilesRequest = await fetch(`${baseUrl}${getProfilesEndpoint}`);
        const profileResponse = await profilesRequest.json() as RomeoResponse;

        const params = new URLSearchParams();
        const profileIds = profileResponse.items.map((item) => item.id)

        profileIds.forEach(id => params.append('ids', id.toString()));

        const profileDetailsRequest = await fetch(`${baseUrl}${getProfileDetailsEndpoint}${params.toString()}`);
        const profileDetailResponse = await profileDetailsRequest.json() as RomeoProfileDetailResponse[]

        return mapResponsesToProfileModel(profileResponse, profileDetailResponse);
    } catch (error) {
        console.error(error);
        return [];
    }
}

const mapResponsesToProfileModel = (
    profileResponse: RomeoResponse,
    profileDetailResponse: RomeoProfileDetailResponse[]
): ProfileModel[] => {
    return profileResponse.items.map((profile) => {
        const detail = profileDetailResponse.find((d) => d.id === profile.id);

        return {
            id: profile.id,
            name: profile.name,
            online_status: profile.online_status,
            picture_url: profile.picture?.url,
            last_login: profile.last_login,
            headline: detail?.headline,
            location: detail?.location.name || "",
            distance: detail?.location.distance || 0,
            age: detail?.personal.age || 0
        };
    });
}

export default getProfiles;
