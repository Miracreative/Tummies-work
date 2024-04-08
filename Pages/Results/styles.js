import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: screenWidth - 20, //высота на 20 единиц меньше, чем ширина экрана.
  },
    imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginBottom: Platform.select({ ios: 0, android: 1 }), //обработка ошибки отображения. 
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  dotContainer: {
    backgroundColor: 'rgb(230,0,0)',
  }
});
export default styles;