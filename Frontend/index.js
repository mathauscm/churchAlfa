import 'react-native-url-polyfill/auto'; // Polyfill para resolver problemas de URL

import { AppRegistry } from 'react-native';
import App from './App';

console.log('index.js inicializado!');

// Certifique-se de que o nome registrado aqui seja "main"
AppRegistry.registerComponent('main', () => App);
