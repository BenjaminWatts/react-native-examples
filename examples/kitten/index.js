
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './App';
import {default as App} from './storybook'; 

AppRegistry.registerComponent(appName, () => App);


