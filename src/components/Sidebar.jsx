import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const LINKS = [
  { title: 'Home', icon: '⌂' },
  { title: 'Send Money', icon: '➚' },
  { title: 'Scan QR', icon: '▦' },
  { title: 'Transactions', icon: '◷' },
  { title: 'Recharge & Bills', icon: '▣' },
  { title: 'Wallet & Balance', icon: '▤' },
  { title: 'Security Centre', icon: '⬟' },
  { title: 'Profile & Settings', icon: '♙' }
];

export default function Sidebar({
  active = 'Home',
  onSelect = () => {}
}) {
  return (
    <View style={styles.sidebar}>
      <View style={styles.brandRow}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>R</Text>
        </View>

        <Text style={styles.brand}>RakshaPe</Text>
      </View>

      {LINKS.map(link => {
        const selected = link.title === active;

        return (
          <TouchableOpacity
            key={link.title}
            onPress={() => onSelect(link.title)}
            style={[
              styles.link,
              selected && styles.active
            ]}
          >
            <Text
              style={[
                styles.icon,
                selected && styles.activeText
              ]}
            >
              {link.icon}
            </Text>

            <Text
              style={[
                styles.linkText,
                selected && styles.activeText
              ]}
            >
              {link.title}
            </Text>
          </TouchableOpacity>
        );
      })}

      <Text style={styles.tagline}>
        Your Money. Always Protected.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: '#FFF8ED',
    padding: 16,
    borderRightWidth: 1,
    borderColor: '#E6D2B8'
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  logo: {
    width: 34,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#4A210D',
    borderWidth: 2,
    borderColor: '#D6A65D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9
  },
  logoText: {
    color: '#FFF3DD',
    fontWeight: '900',
    fontSize: 18
  },
  brand: {
    color: '#4A210D',
    fontSize: 20,
    fontWeight: '900'
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 11,
    marginBottom: 5
  },
  active: {
    backgroundColor: '#F1DFC4'
  },
  icon: {
    width: 28,
    color: '#78533A',
    fontSize: 19
  },
  linkText: {
    color: '#503421',
    fontSize: 13,
    fontWeight: '600'
  },
  activeText: {
    color: '#5B260B',
    fontWeight: '800'
  },
  tagline: {
    color: '#987B5F',
    fontSize: 10,
    marginTop: 25,
    lineHeight: 16
  }
});
