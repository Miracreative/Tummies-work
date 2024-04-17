import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    location: {
        flex: 1,
        justifyContent: 'space-between',
        position: 'relative',
    },
    img: {
        objectFit: 'contain',
        alignSelf: 'center',
        position: 'absolute',
        top: 60,
        left: '20%',
        width: '60%',
        alignItems: 'center',
        zIndex: -1,
    },
    map: {
        position: 'absolute',
        top: -90,
        left: 0,
        zIndex: -2,
        width: '100%',
        height: 100,
    },
    gradient: {
        position: 'absolute',
        top: -90,
        left: 0,
        width: '100%',
        height: 190,
        zIndex: 1,
    },
    title: {
        fontWeight: 500,
        color: 'white',
        marginTop: '40%',
        marginBottom: 10,
        alignSelf: 'center',
        textTransform: 'uppercase',
        width: '40%',
        textAlign: 'center',
    },
    text: {
        fontWeight: 300,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        alignSelf: 'center',
        width: '28%',
    },
    pin: {
        width: 30,
        height: 34,
        objectFit: 'cover',
    },
    image: {
        width:'80%',
        alignSelf: 'center',
        objectFit: 'contain',
    },
    back: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        width: '100%',
        position: 'relative',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(244, 237, 225, 1)'
    }
});

export default styled;