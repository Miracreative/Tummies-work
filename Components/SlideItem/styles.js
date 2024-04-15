import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: '5%'
    },
    image: {
        height: '100%',
        alignSelf: 'center',
        width: "100%",
        backgroundPosition: 'center center',
    },
    title: {
        fontWeight: 500,
        color: '#000000',
        width: "50%",
        alignSelf: 'center',
        marginBottom: '5%',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    text: {
        fontWeight: 300,
        color: 'rgba(12, 3, 0, 1)',
        textAlign: 'center',
        width: "45%",
        alignSelf: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default styled;