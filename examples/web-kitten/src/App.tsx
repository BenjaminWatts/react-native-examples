import React from 'react';
import {Layout, Button} from '@ui-kitten/components';
import {Kitten} from './kitten';

type Props = {};
const App = (_props: Props) => (
  <Kitten>
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button>HOME</Button>
    </Layout>
  </Kitten>
);

export default App;
