import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    location: {
        flex: 1,
        backgroundColor: 'rgba(244, 237, 225, 1)',
        position: 'relative',
    },
    img: {
        height: 150,
        width: 120,
        objectFit: 'contain',
        marginVertical: 20,
        alignSelf: 'center',
    },
    title: {
        fontWeight: 500,
        color: 'black',
        alignSelf: 'center',
        marginBottom: 20
    },
    text: {
        fontWeight: 300,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 20
    },
    map: {
        position: 'absolute',
        top: -90,
        left: 0,
        zIndex: -5,
        width: '100%',
        height: '120%',
    },
    gradient: {
        position: 'absolute',
        top: -100,
        left: 0,
        width: '100%',
        height: 120,
        zIndex: -1,
    },
    pin: {
        width: 30,
        height: 34,
        objectFit: 'cover',
    },
    info: {
        height: '40%',
        marginTop: '130%',
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: 'red',
        borderRadiusTopLeft: 20,
        borderRadiusTopRight: 20,
    },
    address: {
        width: 220,
        alignSelf: 'center',
        marginBottom: 50,
        fontWeight: 500,
        color: 'rgba(12, 3, 0, 1)',
        textAlign: 'center',
    },
    image: {
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 5
    },
    modal: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    
    image: {
        width:'80%',
        alignSelf: 'center',
        objectFit: 'contain',
        marginBottom: 20
    }
});

export default styled;