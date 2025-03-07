import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

type RomeoProfileImageProp = {
    url: string
};

const RomeoProfileImage = (props: RomeoProfileImageProp) => {
    return <Image
        style={ styles.image }
        source={props.url}
    />
};

const styles = StyleSheet.create ({
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black'
    }
});

export default RomeoProfileImage;

