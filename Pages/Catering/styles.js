import { StyleSheet } from "react-native";


const styled = StyleSheet.create({
  title: {
    paddingBottom: 30,
    fontFamily: 'hagrid',
    textAlign: 'center',
    marginTop: 20,
    color: '#0C0300',
    textTransform: 'uppercase',
    fontWeight: 500,
},
container: {
    flex: 1,
    backgroundColor: '#F3EDDF',
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',

},
btnContainer: {
    alignSelf: 'center',
    width: '90%',
    display: 'flex',
},
btn: {
    width: '100%',
    backgroundColor: 'rgba(245, 89, 38, 1)',
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
},
text: {
    textAlign: 'center',
    color: 'rgba(243, 237, 223, 1)',
    fontWeight: 500,
},
});

export default styled;
