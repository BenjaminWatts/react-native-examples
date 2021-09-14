import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

const screenStyles: any = {
  flex: 1,
  justifyContent: '"center"',
  height: '100%',
};

export const HomeScreen = (props: any) => (
  <Layout style={screenStyles}>
    <Button>HOME</Button>
    <Button onPress={() => props.navigation.navigate('Second')}>
      To Second
    </Button>
    <Button onPress={() => props.navigation.navigate('Third')}>To Third</Button>
  </Layout>
);

export const SecondScreen = (props: any) => (
  <Layout style={screenStyles}>
    <Button>SECOND</Button>
    <Button onPress={() => props.navigation.navigate('Home')}>To Home</Button>
    <Button onPress={() => props.navigation.navigate('Third')}>To Third</Button>
  </Layout>
);

export const ThirdScreen = (props: any) => (
  <Layout style={screenStyles}>
    <Button>THIRD</Button>
    <Button onPress={() => props.navigation.navigate('Second')}>
      To Second
    </Button>
    <Button onPress={() => props.navigation.navigate('Home')}>To Home</Button>
  </Layout>
);
