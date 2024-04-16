import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    email: {
        flex: 1,
        justifyContent: 'space-between',
    },
    img: {
        width: '50%',
        alignSelf: 'center',
        objectFit: 'contain',
        height: 170,
        marginBottom: 100   
    },
    title: {
        fontWeight: 500,
        color: 'black',
        alignSelf: 'center',
        marginBottom: 20,
        textAlign: 'center'
    },
    subtitle: {
        color: "white",
        textTransform: "uppercase",
        textAlign: 'center',
        fontWeight: 500,
        marginBottom: 40
    },
    text: {
        fontWeight: 300,
        color: '#0C0300',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        width: '100%',
    },
    started: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white',
        fontWeight: 500,
    },
    input: {
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 20,
        borderColor: 'rgba(12, 3, 0, 0.50)',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 15,
    },
    error: {
        color: 'rgba(255, 0, 0, 1)',
        // font-size: 14px;
        textAlign: 'center',
        fontWeight: 500,
    },
    privacy: {
        flex: 0.1,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20,
        textAlign: 'center',
    },
    stroke: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 300,
    },
    term: {
        fontWeight: 300,
        color: '#0C0300',
    },
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'space-between',
    },
    wrapper: {
        justifyContent: 'space-between'
    },
    image: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 20,
        objectFit: 'contain'
    },
    back: {
        flex: 1
    }
});

export default styled;