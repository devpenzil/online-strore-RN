import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';

const Accordian = ({head, desc}) => {
  const [show, setShow] = useState(false);
  return (
    <Pressable style={styles.container} onPress={() => [setShow(!show)]}>
      <View style={styles.acchead}>
        <View>
          <Text style={styles.heading}>{head}</Text>
        </View>
        <View>
          <Image
            style={show && styles.icon}
            source={require('../assets/downarrow.png')}
          />
        </View>
      </View>
      {show && (
        <View>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
  acchead: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  desc: {
    color: '#000',
    textAlign: 'justify',
    marginTop: 10,
  },
  icon: {
    transform: [{rotate: '180deg'}],
  },
});
