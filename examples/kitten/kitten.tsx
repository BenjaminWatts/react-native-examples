import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from './theme.json'; 

type Props = {
  children: React.ReactChild | React.ReactChildren
}
export const Kitten = (props: Props) => (
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    {props.children}
  </ApplicationProvider>
);

