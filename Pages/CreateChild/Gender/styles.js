import { StyleSheet } from "react-native";

const styled = StyleSheet.create({
  gender: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F3EDDF',
    position: 'relative',
  },
  backImg: {
      width: '100%',
      flex: 1,
      objectFit: 'cover',
  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      position: 'relative',
      width: '100%',
  },
  title: {
      fontWeight: 500,
      textTransform: 'uppercase',
      width: '70%',
      textAlign: 'center',
      color: '#0C0300',
  },
  descr: {
      textAlign: 'center',
      fontWeight: 300,
      width: '50%',
  },
  iconContainer: {
      // flex: 0.4,
      width: '100%',
      alignItems: 'center',
  },
  text: {
      // fontSize: 20px,
      color: 'rgba(12, 3, 0, 1)',
      textAlign: 'center',
      fontWeight: 500,
      marginTop: 15,
  },
  icon: {
      objectFit: 'contain',
  },
back: {
    flex: 1,
   justifyContent: 'space-between',
},
});

export default styled;