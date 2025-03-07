import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

type RomeoProfileImageProp = {
    url?: string
};

const RomeoProfileImage = (props: RomeoProfileImageProp) => {
    return <Image
        style={ styles.image }
        source={props.url}
        contentFit="cover"
    />
};

const styles = StyleSheet.create ({
    image: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        zIndex: 0
        
    }
});

export default RomeoProfileImage;

