import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
  title: {
    fontFamily: 'hagrid',
    textAlign: 'center',
    marginTop: 20,
    color: '#0C0300',
    textTransform: 'uppercase',
    fontWeight: 500,
},
descr: {
    fontWeight: 300,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
},
subtitle: {
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 20,
},
container: {
    flex: 1,
    backgroundColor: '#F3EDDF',
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
},
back: {
  flex: 1,
  justifyContent: 'space-between',
},
link: {
    textAlign: 'center',
    color: 'rgba(245, 89, 38, 1)',
    fontWeight: 500,
    fontFamily: "inter",
},
});

export default styled;