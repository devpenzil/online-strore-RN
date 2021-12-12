import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 350,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  itemname: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },
  contentboxtwo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
  counterbutton: {
    fontSize: 24,
    backgroundColor: '#53B175',
    width: 30,
    borderRadius: 30,
    textAlign: 'center',
    color: '#fff',
  },
  counterBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 22,
    marginHorizontal: 10,
    color: '#000',
    fontWeight: '800',
    textAlign: 'center',
  },
  amount: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
  },
  button: {
    paddingVertical: 5,
  },
  categ: {
    color: '#000',
  },
});
