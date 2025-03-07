import { View, Text, Image, StyleSheet } from 'react-native';
import RomeoProfileImage from './RomeoProfileImage';
import ProfileModel from '../model/ProfileModel';

type RomeoProfileItemProp = {
    profile: ProfileModel
}

const RomeoProfileUiItem = (props: RomeoProfileItemProp) => {
    return <View style={{
        width: '50%',
        height: 200
    }}>
        <RomeoProfileImage url={props.profile.picture_url} />

        <View style={{
            flexDirection: 'column-reverse',
            position: 'absolute',
            bottom: 10,
            left: 10,
            zIndex: 1,

        }}>
            <Text style={styles.distance}>
                {props.profile.distance}m
            </Text>

            <Text style={styles.headline} numberOfLines={2} ellipsizeMode='tail'>
                {props.profile.headline}
            </Text>

            <Text style={{ color: 'white' }}>
                About 18 hours ago
            </Text>

            <Text style={styles.username}>
                {props.profile.name} {props.profile.age}
            </Text>



        </View>
    </View>
};

export default RomeoProfileUiItem

const styles = StyleSheet.create({
    username: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        fontWeight: 500,
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },
    headline: {
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: 0,
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        fontWeight: 400,
        paddingEnd: 12,
        marginTop: 12,
        color: 'white'
    },
    distance: {
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: 0,
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        fontWeight: 400,
        color: 'white'
    }
});