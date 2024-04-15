import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    results: {
        flex: 1,
        width: "100%",
        paddingTop: 40,
        backgroundColor: '#ffffff'
    },
    title: {
        color: '#0C0300',
        fontWeight: 700,
        marginBottom: 15,
        textTransform: 'uppercase',
        alignSelf: 'center',
        marginBottom: 30,
        textAlign: 'center',
        width: "80%",
    },
    text: {
        fontWeight: 300,
        color: '#0C0300',
        width: '55%',
        alignSelf: 'center',
        marginBottom: 75,
        // alignContent: 'center'
        textAlign: 'center'
    },
    dates: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        gap: 10,
        position: 'relative',
        marginTop: 20,
        marginBottom: 30
    },
    item: {
        position: 'relative',
        width: '30%',
        borderRadius: 20,
        zIndex: 2,
        backgroundColor: 'transparent'
    },
    date: {
        textAlign: 'center',
        fontSize: 20,
        color: '#F55926',
        marginTop: 11,
        marginHorizontal: 16,
        marginBottom: 18
        
    },
    shadow: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: -5,
        left: 0,
        borderRadius: 20,
        zIndex: -2,
        borderColor: '#F55926',
        borderStyle: 'solid',
        borderWidth: 1
    },
    divider: {
        width: '94%',
        height: 1,
        backgroundColor: '#0C0300',
        opacity: .2,
        alignSelf: "center",
        marginBottom: 20
    },
    box: {
        borderRadius: 20,
        width: '92%',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: '#F55926',
        borderWidth: 1,
        borderBottomStyle: 'solid',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 40
    },
    ring: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor:  '#F55926',
        alignSelf: 'center',
        marginBottom: 5
    },
    descr: {
        alignSelf: 'center',
        width: '90%',
        textAlign: 'center',
        marginBottom: 20
    },
    fone: {
        position: 'absolute',
        width: '90%',
        height: '100%',
        bottom: 0,
        left: '5%',
        zIndex: -1
    },
    price: {
        fontWeight: 700,
        fontSize: 50,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    valute: {
        color: 'white',
        marginBottom: 20,
        alignItems: 'center',
        textAlign: 'center'
    },
    border: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'rgba(243, 237, 223, 1)',
        zIndex: -1
    },
    pink: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        height: 380,
        // zIndex: -1
    },
    add: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(243, 237, 223, 0.92)'
    },
    toStart: {
        width: '60%',
        alignSelf: 'center',
        marginBottom: 60,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 500
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        position: 'relative',
        justifyContent: 'space-between'
    
    }
});

export default styled;
