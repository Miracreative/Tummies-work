import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    button: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 10,
    },
    text: {
        fontWeight: 500,
        marginVertical: 18,
        textAlign: 'center'
    },
    arrow: {
        position: 'absolute',
        top: '40%',
        right: '22%',
        tintColor: 'rgba(12, 3, 0, 1)'
    }
});

export default styled;
