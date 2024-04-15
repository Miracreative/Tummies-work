import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    icon: {
        width: 140,
        height: 158,
        paddingVertical: 2,
        position: 'relative',
        marginBottom: 25
    },
    icon__back: {
       width: "100%",
       height: 150,
    },
    icon__container: {
        display: "flex",
        gap: 11,
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
    },
    icon__text: {
        fontWeight: 500
    },
    icon__background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 3,
        zIndex: -1
    }
});

export default styled;