import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
    title: {
        paddingBottom: 30,
        fontFamily: 'hagrid',
        textAlign: 'center',
        marginTop: 20,
        color: '#0C0300',
        textTransform: 'uppercase',
        fontWeight: 500
    },
    container: {
        flex: 1,
        backgroundColor: '#F3EDDF',
        width: '100%',
        position: 'relative',
        justifyContent: 'space-between'
    
    },
    videoContainer: {
        alignSelf: 'center',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
});

export default styled;