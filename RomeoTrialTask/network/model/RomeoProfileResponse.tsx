type RomeoProfile = {
    id: string,
    name: string,
    online_status: string,
    is_plus: string,
    picture: RomeoProfilePicture
    last_login: string
}

type RomeoProfilePicture = {
    comment: string,
    url: string
}

export default RomeoProfile;