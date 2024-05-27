import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const FilterView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Status</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>Lİfe : </Text>
          <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
          />
        </View>
      </View>
    </View>
  );
};

export default FilterView;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderRadius: 5,
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#F6F6F6',
  },
  main: {
    margin: 10,
    flexDirection: 'column',
  },
  input: {
    width: 90,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
