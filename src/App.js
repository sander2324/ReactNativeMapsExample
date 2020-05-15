import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import { registerRootComponent } from 'expo';

import Map from './components/Map';
import styles from './styles';


function App() {
  const [showMap, setShowMap] = useState(false);

  if (showMap) {
    return <Map />;
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => setShowMap(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Waar ben ik?</Text>
      </TouchableHighlight>
    </View>
  );
}

registerRootComponent(App);
