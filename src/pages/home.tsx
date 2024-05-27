import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {useEffect, useState} from 'react';
import Card from '../components/Card';
import FilterView from '../components/FilterView';

const apiURL = 'https://rickandmortyapi.com/api/character';

type Props = {};

const home = (props: Props) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(48);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState(null);
  const [filterPosition, setFilterPosition] = useState(false);
  const [text, onChangeText] = useState('');
  const placeholder = 'status';
  const ref = useRef();

  useEffect(() => {
    getApi();
  }, [page]);

  useEffect(() => {
    // console.log(text.length);
    if (text.length !== 0 && text.length >= 4) {
      setFilterText(text === 'life' ? null : text);
      getFilter(text);
    } else {
      setFilterText(null);
      setFilterData[null];
    }
  }, [text, data]);

  const getApi = async () => {
    try {
      const temp = await fetch(apiURL + '?page=${' + page + '}');
      const results = await temp.json();
      // console.log('temp', results);
      setData([...data, ...results.results]);
      setLoading(true);
      // console.log('data.lent', data.length);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getFilter = async filter => {
    //console.log('getFilter', filter);

    const filterTemp = await data.filter(res => {
      return res.status.toLowerCase() === filter.toLowerCase();
    });
    setFilterData([...filterTemp]);

    //console.log('setfilter', filterTemp, data.length);
  };
  const loadMoreCharacters = () => {
    console.log('loadmore', page, totalPages);
    setFilterPosition(false);
    if (filterPosition == false && page <= totalPages) {
      setFilterPosition(false);
      setPage(page + 1);
    }
  };

  if (!loading) {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <ActivityIndicator color={'#2653A9'} size={'large'}></ActivityIndicator>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.filterView, {height: 40}]}>
        <TouchableOpacity
          onPress={() => setFilterPosition(!filterPosition)}
          style={[
            styles.touchFilter,
            {backgroundColor: filterPosition ? '#DE5B2A' : 'white'},
          ]}>
          <Text
            style={[
              styles.textFilter,
              {color: filterPosition ? 'white' : 'black'},
            ]}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>

      {filterPosition ? (
        <View style={[{height: filterPosition ? 100 : 40, marginBottom: 10}]}>
          <FilterView
            placeholder={placeholder}
            onChangeText={onChangeText}></FilterView>
        </View>
      ) : null}
      <FlatList
        ref={ref}
        data={filterText === null ? data : filterData}
        renderItem={({item}) => <Card data={item} />}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: '5%',

    marginRight: '5%',
    height: '95%',
    justifyContent: 'center',
  },
  filterView: {
    width: '90%',
    flexDirection: 'row-reverse',
    paddingLeft: 0,
    marginTop: 10,
  },
  textFilter: {
    fontSize: 20,
  },
  touchFilter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 30,
    borderWidth: 0.35,
    borderRadius: 5,
  },
});
