import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    header: {
        paddingBottom: 28,
        width: '90%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 2
    },
    header__wrapper: {
        flexDirection: 'row',
        gap: 23
    },
    header__wrapper_opacity: {
        flexDirection: 'row',
        gap: 23,
        opacity: 0,
        userSelect: 'none',
        pointerEvents: 'none'
    },
    header__container: {
        width: 40,
        height: 40,
    },
    header__container_opacity: {
        width: 40,
        height: 40,
        opacity: 0,
        userSelect: 'none',
        pointerEvents: 'none'
    },
    header__img: {
        width: '100%',
        height: '100%'
    },
    header__ring: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'rgba(245, 89, 38, 1)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header__ring_white: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header__text: {
        display: 'flex',
        textAlign: 'center',
        color: "#ffffff",
        fontWeight: 700,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    header__text_red: {
        display: 'flex',
        textAlign: 'center',
        color: "rgba(245, 89, 38, 1)",
        fontWeight: 700,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default styled;
