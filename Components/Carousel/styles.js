import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30
  },
  title: {
    fontSize: 14,
    textAlign: 'center'
  },
  item: {
    paddingTop: 20,
    width: '100%',
    height: 350, 
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(245, 89, 38, 1)',
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        marginBottom: 10,
  },
  itemContainer: {
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'rgba(244, 237, 225, 1)',
  },
  change: {
    backgroundColor: "rgba(245, 89, 38, 1)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontWeight: 700,
    padding: 13
  },
  changeText: {
    color: "rgba(255, 255, 255, 1)",
    textAlign: 'center'
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    height: 80,
    width: "80%",
    resizeMode: 'contain',
  }
});
export default styles;