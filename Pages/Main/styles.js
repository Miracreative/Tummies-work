import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    title: {
        paddingTop: 30,
        // font-size: 22px;
        fontFamily: 'hagrid',
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(245, 89, 38, 1)',
        width: '100%',
        position: 'relative',
        justifyContent: 'space-between',
    
    },
    wrapper: {
        flex: .2,
        paddingTop: 40,
        height: 90,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 50
    },
    image: {
        width: '80%',
        alignSelf:'center',
        objectFit: 'contain',
        flex: 0.2,
        tintColor:'#ffffff',
    },
    back: {
        flex: 1,
       justifyContent: 'space-between',
       zIndex: -2
        // justify-content: center;
    }
});

export default styled;