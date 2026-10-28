import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HeaderCard({
  name = 'RakshaPe',
  initials = 'RK',
  onNotificationPress,
  onProfilePress
}) {
  return (
    <View style={styles.row}>
      <View style={styles.brandMark}>
        <Text style={styles.shield}>R</Text>
      </View>

      <Text style={styles.brand}>{name}</Text>

      <View style={styles.spacer} />

      <TouchableOpacity
        onPress={onNotificationPress}
        style={styles.action}
      >
        <Text style={styles.bell}>♧</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onProfilePress}
        style={styles.avatar}
      >
        <Text style={styles.initials}>{initials}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  brandMark: {
    width: 28,
    height: 32,
    borderWidth: 2,
    borderColor: '#D8AD65',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A210D',
    marginRight: 8
  },
  shield: {
    color: '#FFF1D8',
    fontWeight: '900',
    fontSize: 16
  },
  brand: {
    color: '#FFF8ED',
    fontSize: 21,
    fontWeight: '800'
  },
  spacer: {
    flex: 1
  },
  action: {
    padding: 7,
    marginRight: 5
  },
  bell: {
    color: '#FFF8ED',
    fontSize: 22
  },
  avatar: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#F1DDBD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  initials: {
    color: '#4A210D',
    fontSize: 10,
    fontWeight: '800'
  }
});
