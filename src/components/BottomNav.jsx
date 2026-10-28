import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const ITEMS = [
  { key: 'Home', icon: '⌂' },
  { key: 'History', icon: '◷' },
  { key: 'Rewards', icon: '☆' },
  { key: 'Profile', icon: '♙' }
];

export default function BottomNav({
  active = 'Home',
  onChange = () => {}
}) {
  return (
    <View style={styles.bar}>
      {ITEMS.map(item => {
        const selected = active === item.key;

        return (
          <TouchableOpacity
            key={item.key}
            style={styles.item}
            onPress={() => onChange(item.key)}
            accessibilityRole="button"
          >
            <Text
              style={[
                styles.icon,
                selected && styles.selected
              ]}
            >
              {item.icon}
            </Text>

            <Text
              style={[
                styles.label,
                selected && styles.selected
              ]}
            >
              {item.key}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: '#FFF9F0',
    borderTopWidth: 1,
    borderTopColor: '#E8D6BE',
    paddingTop: 9,
    paddingBottom: 12,
    justifyContent: 'space-around'
  },
  item: {
    alignItems: 'center',
    minWidth: 58
  },
  icon: {
    color: '#806D5C',
    fontSize: 22,
    marginBottom: 2
  },
  label: {
    color: '#806D5C',
    fontSize: 10
  },
  selected: {
    color: '#6A2F0D',
    fontWeight: '800'
  }
});
