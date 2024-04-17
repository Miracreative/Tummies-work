import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    apply: {
        flex: 1,
        backgroundColor: '#F3EDDF',
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
        width: '100%',
        height: '100%',
    },
    input: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 20,
        borderColor: 'rgba(12, 3, 0, 0.50)',
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 16,
        padding: 15,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '94%',
    },
    
    title: {
        fontWeight: 500,
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
        textTransform: 'uppercase',
        width: '90%',
        textAlign: 'center',
    },
    text: {
        fontWeight: 300,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        width: '60%',
    },
    addressesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30,
        gap: 10,
        // height: 50
    },
    address: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 30,
        fontWight: 500,
        color: 'rgba(12, 3, 0, 1)',
        textAlign: 'center',
    },
    border: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#0C0300',
        width: '90%',
        alignSelf: 'center',
        opacity: .2,
    },
    image: {
        alignSelf: 'center',
        marginBottom: 5,
        margintop: 20
    },
    btns: {
        marginTop: 'auto',
        marginBottom: 20,
    },
    container: {
        width: '90%',
        overflow: 'hidden',
        marginVertical: 20,
        alignSelf: 'center',
        display: 'flex',
        height: 180,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: '#F55926',
        borderWidth: 1,
        position: 'relative',
    },
    item: {
        position: 'relative',
        borderRadius: 20,
        zIndex: 2,
        backgroundColor: 'transparent',

    },
    date: {
        textAlign: 'center',
        color: '#F55926',
        marginHorizontal: 22,
        marginTop: 8,
        marginBottom: 15
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
        borderWidth: 1,
    },
    image: {
        width: '80%',
        alignSelf: 'center',
        objectFit: 'contain',
    },
    back: {
        flex: 1
    }
});

export default styled;