import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    auth: {
        flex: 1,
        backgroundColor: 'rgba(244, 237, 225, 1)',
        position: 'relative'
    },
    auth__img: {
        objectFit: 'contain',
        marginBottom: 40,
        marginTop: 80,
        width: "35%",
        height: 160,
        alignSelf: 'center',
    },
    auth__title: {
        fontSize: 22,
        fontWeight: 500,
        color: "#0C0300",
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 0,
        textAlign: 'center'
    },
    auth__text: {
        fontWeight: 300,
        color: "#ffffff",
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 0,
        textAlign: 'center',
        width: "28%"
    },
    auth__started: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: "#ffffff",
        fontWeight: 500
    },
    auth__input: {
        backgroundColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        marginTop: 0,
        width: '90%',
        borderRadius: 20,
        borderColor: 'rgba(12, 3, 0, 0.50)',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 15,
    },
    auth__buttons: {
        marginBottom: 20
    },
    auth__error: {
        color: 'rgba(255, 0, 0, 1)',
        textAlign: 'center',
        fontWeight: 500
    },
    auth__roundbtn: {
        width: '40%',
        // height: 100px;
        aspectRatio: 1,
        alignSelf: 'center',
        padding: 35,
        color: '#ffffff',
        fontWeight: 700,
        borderRadius: 200,
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: 'rgba(245, 89, 38, 1)'
    },
    wrapper: {
        flex: 1
    },
    image: {
        width: '80%',
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 0,
        objectFit: 'contain'
    }
});

export default styled;
