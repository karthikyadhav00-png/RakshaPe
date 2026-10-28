import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function FeatureCard({
  title,
  subtitle,
  icon = '✦',
  onPress,
  compact = false
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={[styles.card, compact && styles.compact]}
    >
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>

        {!!subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>

      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8ED',
    borderRadius: 14,
    padding: 12,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: '#F0E0CB'
  },
  compact: {
    padding: 9,
    marginBottom: 7
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#F5E3C9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11
  },
  icon: {
    fontSize: 21,
    color: '#6A2F0D'
  },
  copy: {
    flex: 1
  },
  title: {
    color: '#321A0D',
    fontSize: 14,
    fontWeight: '700'
  },
  subtitle: {
    color: '#82705F',
    fontSize: 11,
    marginTop: 3,
    lineHeight: 15
  },
  chevron: {
    color: '#9B7A57',
    fontSize: 24,
    marginLeft: 5
  }
});
