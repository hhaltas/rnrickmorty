import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const testData = {
  image: 'https://rickandmortyapi.com/api/character/avatar/185.jpeg',
  name: 'Joseph Eli Lipkip',
  status: 'Alive',
  type: 'Human',
  life: true,
};

const Card = props => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.rightView}>
          <Image src={props.data.image} style={[styles.imageSize]} />
        </View>
        <View style={styles.centerView}>
          <Text>Name : {props.data.name}</Text>
          <Text>Species : {props.data.species}</Text>
          <Text>Life : {props.data.status}</Text>
          <Text>{props.data.life}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    height: 90,
    width: '90%',
    borderRadius: 10,
    borderWidth: 0.2,
    marginBottom: 10,
  },
  container: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
  },
  rightView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    borderRadius: 10,
  },
  centerView: {
    justifyContent: 'center',
    width: '60%',
    height: '100%',
  },
  imageSize: {
    width: 58,
    height: 58,
    borderRadius: 5,
  },
});
