import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Image} from 'react-native';
import { Link, Tabs } from 'expo-router';
import React, {useState} from 'react';

import AppNavigation from './src/navigation';

export default function App() {
  return <AppNavigation />
}

