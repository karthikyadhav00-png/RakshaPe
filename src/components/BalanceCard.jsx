import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const COLORS = {
  brown: '#4A210D',
  gold: '#C58A3A',
  cream: '#FFF8ED',
  muted: '#7B6858'
};

export default function BalanceCard({
  balance = '25,430.75',
  account = 'Savings Account •••• 1234',
  partial = false,
  onPress
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Total Balance</Text>

      <Text
        onPress={onPress}
        style={styles.amount}
      >
        {partial ? '₹ ••••••••' : `₹ ${balance}`}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.account}>
          {partial ? 'Partial view (App PIN)' : account}
        </Text>

        <Text
          style={styles.eye}
          onPress={onPress}
        >
          {partial ? '◉' : '◎'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cream,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8D6BE',
    marginBottom: 14
  },
  label: {
    color: COLORS.muted,
    fontSize: 13,
    marginBottom: 4
  },
  amount: {
    color: COLORS.brown,
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 0.2
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8
  },
  account: {
    color: COLORS.muted,
    fontSize: 11
  },
  eye: {
    color: COLORS.brown,
    fontSize: 21,
    paddingHorizontal: 4
  }
});