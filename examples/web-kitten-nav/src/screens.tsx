import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

const screenStyles: any = {
  flex: 1,
  justifyContent: '"center"',
  height: '100%',
};

export const HomeScreen = () => (
  <Layout style={screenStyles}>
    <Button>HOME</Button>
  </Layout>
);

export const SecondScreen = () => (
  <Layout style={screenStyles}>
    <Button>SECOND</Button>
  </Layout>
);
