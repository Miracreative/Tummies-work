import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    slider: {
        overflow: 'hidden',
        position: 'relative',
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        flex: 0.6,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default styled;