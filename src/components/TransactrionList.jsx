import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

function TransactionRow({ item }) {
  const incoming =
    item.type === 'received' ||
    String(item.amount).trim().startsWith('+');

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.iconCircle,
          incoming && styles.incoming
        ]}
      >
        <Text style={styles.icon}>
          {incoming
            ? '↓'
            : item.type === 'bill'
            ? 'ϟ'
            : '↑'}
        </Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.detail}>{item.detail}</Text>
        <Text style={styles.status}>
          {item.status || 'Demo'}
        </Text>
      </View>

      <Text
        style={[
          styles.amount,
          incoming && styles.positive
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );
}

export default function TransactionList({
  transactions = []
}) {
  if (!transactions.length) {
    return (
      <Text style={styles.empty}>
        No transactions yet.
      </Text>
    );
  }

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item, index) =>
        String(item.id ?? index)
      }
      renderItem={({ item }) => (
        <TransactionRow item={item} />
      )}
      scrollEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E3D2'
  },
  iconCircle: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#F3DFC0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  incoming: {
    backgroundColor: '#DCEEDC'
  },
  icon: {
    color: '#6A2F0D',
    fontSize: 20,
    fontWeight: '800'
  },
  details: {
    flex: 1
  },
  title: {
    color: '#352014',
    fontSize: 13,
    fontWeight: '700'
  },
  detail: {
    color: '#8B7867',
    fontSize: 10,
    marginTop: 3
  },
  status: {
    color: '#258047',
    fontSize: 10,
    marginTop: 3
  },
  amount: {
    color: '#4A210D',
    fontSize: 12,
    fontWeight: '800',
    marginLeft: 8
  },
  positive: {
    color: '#258047'
  },
  empty: {
    color: '#8B7867',
    paddingVertical: 18,
    textAlign: 'center'
  }
});
