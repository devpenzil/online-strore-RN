import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  searchresults: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    padding: 10,
    borderColor: '#ececec',
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemname: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  itemcat: {color: '#000', fontSize: 12},
  itemprice: {color: '#000', fontSize: 22, fontWeight: '800'},
  heading: {fontSize: 14, padding: 10, fontWeight: '500', color: '#000'},
});
