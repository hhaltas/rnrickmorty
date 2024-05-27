import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  img: imgae;
  name: string;
  status: boolean;
};

const testData = {
  image: 'https://rickandmortyapi.com/api/character/avatar/185.jpeg',
  name: 'Joseph Eli Lipkip',
  status: 'Alive',
  type: 'Human',
};

const Card = (props: Props) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.rightView}>
          <Image src={testData.image} style={styles.imageSize} />
        </View>
        <View style={styles.centerView}>
          <Text>{testData.name}</Text>
          <Text>{testData.status}</Text>
          <Text>{testData.type}</Text>
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
    borderWidth: 0.04,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
  },
  centerView: {
    width: '60%',
    height: '100%',
  },
  imageSize: {
    width: 58,
    height: 58,
  },
});
