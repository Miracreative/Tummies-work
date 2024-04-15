import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    name: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F3EDDF',
        position: 'relative',
        
    },
    text: {
        width: '60%',
        alignSelf: 'center',
        color: 'rgba(12, 3, 0, 1)',
        textAlign: 'center',
        fontWeight: 500,
        marginBottom: 20
    },
    icon: {
        width: '30%',
        marginBottom: 40,
        alignSelf: 'center'
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
        marginBottom: 20
    },
    containerMain: {
        flex: 1,
        backgroundColor: '#F3EDDF',
        width: "100%",
        // justify'-content: flex-start;
        position: 'relative',
        justifyContent: 'space-between'
    }
});

export default styled;