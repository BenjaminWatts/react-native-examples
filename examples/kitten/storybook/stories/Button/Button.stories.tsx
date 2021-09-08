import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { Kitten } from '../../../kitten'
import { Button } from '@ui-kitten/components';

storiesOf('Button', module)
  .add('with text', () => (
    <Kitten>
      <Button onFocus={console.warn}>
        {evaProps => <Text {...evaProps}>BUTTON</Text>}
      </Button>
    </Kitten>
  ))

