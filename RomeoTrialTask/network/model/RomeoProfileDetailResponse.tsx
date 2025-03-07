type RomeoProfileDetailResponse = {
    id: string,
    headline?: string,
    location: RomeoProfileDetailLocation,
    personal: RomeoProfileDetailPersonal
}

type RomeoProfileDetailLocation = {
    distance: number,
    name: string
}

type RomeoProfileDetailPersonal = {
    age: number
}

export default RomeoProfileDetailResponse;