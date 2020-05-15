import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import styles from '../styles';


function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((loc) => {
      setLocation(loc.coords);
    });
  }, []);

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.mapStyle}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        title="Hier ben je!"
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
}

export default Map;
