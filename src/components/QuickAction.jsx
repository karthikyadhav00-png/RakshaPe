import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function QuickAction({
  title,
  icon = '✦',
  onPress
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.item}
    >
      <View style={styles.circle}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 3
  },
  circle: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: '#6A2F0D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6
  },
  icon: {
    color: '#FFF4E0',
    fontSize: 21,
    fontWeight: '700'
  },
  label: {
    color: '#3E2415',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center'
  }
});
