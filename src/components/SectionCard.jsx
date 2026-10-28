import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function SectionCard({
  title,
  action,
  children
}) {
  return (
    <View style={styles.wrap}>
      <View style={styles.headingRow}>
        <Text style={styles.title}>{title}</Text>

        {!!action && (
          <Text style={styles.action}>{action}</Text>
        )}
      </View>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 17
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  title: {
    color: '#321A0D',
    fontSize: 16,
    fontWeight: '800'
  },
  action: {
    color: '#8B4B1C',
    fontSize: 12,
    fontWeight: '700'
  }
});
