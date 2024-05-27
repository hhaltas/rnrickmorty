import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../components/Card';

const apiURL = 'https://rickandmortyapi.com/api';

type Props = {};

const home = (props: Props) => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState(null);

  useEffect(() => {}, []);

  if (!loading) {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <ActivityIndicator color={'#2653A9'} size={'large'}></ActivityIndicator>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>home</Text>

      <Card />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
