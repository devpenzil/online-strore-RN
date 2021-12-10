import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const StatusBarMain = ({transparent}) => {
  return (
    <StatusBar
      animated={true}
      backgroundColor={transparent ? 'transparent' : '#53B175'}
      translucent={transparent}
    />
  );
};

export default StatusBarMain;
