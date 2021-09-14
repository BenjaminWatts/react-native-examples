import React from 'react';
import {Text} from '@ui-kitten/components';
import {Kitten} from './kitten';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './stack';

const linking = {
  prefixes: ['https://mychat.com', 'mychat://', 'https://react-native-examples-web-kitten-nav.netlify.app/'],
  config: {
    screens: {
      Home: '*',
      Second: '/second',
    },
  },
};

type Props = {};

const App = (_props: Props) => (
  <Kitten>
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <MainStack />
    </NavigationContainer>
  </Kitten>
);

export default App;
