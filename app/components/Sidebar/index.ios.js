import React from 'react';
import { Text, View, Pressable } from 'react-native';

const SidebarView = (props) => {
  const { title } = props;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default SidebarView;
