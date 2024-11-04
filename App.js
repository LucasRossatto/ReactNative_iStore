import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Pages/Home';
import Header from './src/Components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}


