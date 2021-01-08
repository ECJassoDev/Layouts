import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
  },
  banner: {
    height: 250,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  titleCenter: {
    textAlign: 'center',
  },
  container: {
    marginHorizontal: 10,
  },
  city: {
    width: 250,
    height: 200,
    marginRight: 10,
  },
  target: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  lodgingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  lodgingitem: {
     flexBasis: '49%',
  },
  lodgingImage: {
    width: '100%',
    height: 150,
    marginVertical: 5,
  },
});

export default styles;
