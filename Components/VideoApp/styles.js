import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: "100%",
        height: "100%",
        objectFit: 'cover',
        height: 115,
        borderWidth: 1,
        borderColor: 'rgba(12, 3, 0, 0.5)',
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: '#000000'
    },
    play: {
        position: 'absolute',
        top: '30%',
        left: '40%',
        width: '20%',
        height: '20%',
    },
    videobox: {
        position: 'relative',
        width: '48%',
        height: 150,
        marginBottom: 30,
    },
    poster: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    text: {
        marginTop: 5,
        width: '70%',
    }
});

export default styled;