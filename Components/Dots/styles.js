import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: .1,
        alignItems: 'center'
    },
    dot: {
        borderRadius: 10,
        marginHorizontal: 8,
        marginTop: 20,
        alignSelf: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FFFFFF'
    }
});

export default styled;