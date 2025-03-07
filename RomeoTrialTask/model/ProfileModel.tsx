type ProfileModel = {
    id: string,
    name: string,
    online_status: string,
    picture_url?: string,
    last_login: string,
    headline?: string,
    location: string,
    distance: number,
    age: number

}
 export default ProfileModel;