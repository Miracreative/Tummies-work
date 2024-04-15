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
    videobox: {
        position: 'relative',
        width: '100%',
        height: 240,
        marginBottom: 30,
    }
});

export default styled;