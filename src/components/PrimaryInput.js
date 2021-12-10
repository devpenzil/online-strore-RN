import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const PrimaryInput = ({
  label,
  password,
  phone,
  triggerChange,
  value,
  disabled,
}) => {
  const [pw, setPw] = useState(password);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={pw}
        keyboardType={phone ? 'decimal-pad' : 'default'}
        onChangeText={triggerChange}
        value={value}
        editable={!disabled}
      />
      {password && (
        <TouchableOpacity
          onPress={() => {
            setPw(!pw);
          }}>
          <Text style={styles.pass}>{pw ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#7C7C7C',
    borderBottomWidth: 1,
  },
  container: {
    marginBottom: 30,
  },
  pass: {
    textAlign: 'right',
    fontWeight: '600',
    color: '#000',
  },
  label: {
    color: '#000',
  },
});
