import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import HeaderCard from './components/headerCard';
import BalanceCard from './components/BalanceCard';
import QuickAction from './components/QuickAction';
import SectionCard from './components/SectionCard';
import FeatureCard from './components/featureCard';
import BottomNav from './components/BottomNav';
import TransactionList from './components/TransactrionList';

import {
  quickActions,
  billFeatures,
  exploreFeatures,
  sampleTransactions,
} from './components/model';

const COLORS = {
  brown: '#4A210D',
  darkBrown: '#321A0D',
  gold: '#C58A3A',
  cream: '#FFF8ED',
  paper: '#FFFDF8',
  muted: '#806D5C',
  border: '#E8D6BE',
  paleGold: '#F5E3C9',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [showBalance, setShowBalance] = useState(false);

  const handleAction = (title) => {
    const messages = {
      Send: 'Demo screen: connect an authorized payment provider before enabling real transfers.',
      'Scan QR': 'Demo QR scanner action. Add a camera/QR scanning package to enable scanning.',
      'To Bank': 'Demo bank transfer action. No money will be transferred.',
      'To UPI ID': 'Demo UPI ID payment action. No money will be transferred.',
      Mobile: 'Mobile recharge demo. Connect a bill-payment provider to continue.',
      Electricity: 'Electricity bill demo. Connect a bill-payment provider to continue.',
      DTH: 'DTH recharge demo. Connect a bill-payment provider to continue.',
      'All Bills': 'Bill-payment demo. Connect a provider to enable payments.',
      Loans: 'Loan feature preview.',
      Insurance: 'Insurance feature preview.',
      Invest: 'Investment feature preview.',
      Gold: 'Gold feature preview.',
    };

    Alert.alert(
      title,
      messages[title] || `${title} is a demo feature in this starter app.`
    );
  };

  const renderGrid = (items) => (
    <View style={styles.grid}>
      {items.map((item) => (
        <View key={item.title} style={styles.gridItem}>
          <QuickAction
            title={item.title}
            icon={item.icon}
            onPress={() => handleAction(item.title)}
          />
        </View>
      ))}
    </View>
  );

  const body = activeTab !== 'Home' ? (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <Text style={styles.brand}>RakshaPe</Text>
        <Text style={styles.tagline}>Your Money. Always Protected.</Text>
      </View>

      <View style={styles.placeholderWrap}>
        <Text style={styles.placeholderIcon}>
          {activeTab === 'History' ? '◷' : activeTab === 'Rewards' ? '☆' : '♙'}
        </Text>

        <Text style={styles.placeholderTitle}>{activeTab}</Text>

        <Text style={styles.placeholderText}>
          {activeTab === 'History'
            ? 'Your recent demo transactions appear here.'
            : activeTab === 'Rewards'
              ? 'Rewards and offers will appear here.'
              : 'Profile, account and security settings will appear here.'}
        </Text>

        {activeTab === 'Profile' && (
          <FeatureCard
            title="Security Centre"
            subtitle="App PIN, biometric and privacy settings"
            icon="⬟"
            onPress={() => handleAction('Security Centre')}
          />
        )}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setActiveTab('Home')}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <BottomNav active={activeTab} onChange={setActiveTab} />
      </View>
    </View>
  ) : (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <HeaderCard
            onNotificationPress={() => handleAction('Notifications')}
            onProfilePress={() => setActiveTab('Profile')}
          />

          <View style={styles.banner}>
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerTitle}>Your Money.</Text>
              <Text style={styles.bannerTitle}>Always Protected.</Text>
              <Text style={styles.bannerCaption}>
                Privacy-first access for your peace of mind
              </Text>
            </View>

            <View style={styles.bannerShield}>
              <Text style={styles.bannerShieldText}>R</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <BalanceCard
            balance="25,430.75"
            account="Savings Account  •••• 1234"
            partial={!showBalance}
            onPress={() => setShowBalance((value) => !value)}
          />

          <Text style={styles.helper}>
            {showBalance
              ? 'Demo balance shown · sample data only'
              : 'Partial view · tap the balance to reveal demo amount'}
          </Text>

          <SectionCard title="Quick Actions">{renderGrid(quickActions)}</SectionCard>

          <SectionCard title="Recharge & Bills" action="View all">
            {renderGrid(billFeatures)}
          </SectionCard>

          <SectionCard title="Explore More">{renderGrid(exploreFeatures)}</SectionCard>

          <SectionCard title="Recent Transactions" action="View all">
            <TransactionList transactions={sampleTransactions} />
          </SectionCard>

          <View style={styles.securityNote}>
            <Text style={styles.securityIcon}>⬟</Text>

            <View style={{ flex: 1 }}>
              <Text style={styles.securityTitle}>Security Centre</Text>
              <Text style={styles.securityText}>
                Manage app access and privacy preferences.
              </Text>
            </View>

            <TouchableOpacity onPress={() => handleAction('Security Centre')}>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.disclaimer}>
            RakshaPe UI demo. Balances and transactions are sample data; real UPI payments require an authorized provider and backend.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <BottomNav active={activeTab} onChange={setActiveTab} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#4A210D" />
      {body}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  content: {
    paddingBottom: 18,
  },
  topBar: {
    backgroundColor: COLORS.brown,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  brand: {
    color: COLORS.cream,
    fontSize: 24,
    fontWeight: '900',
  },
  tagline: {
    color: '#EAD0A7',
    fontSize: 12,
    marginTop: 4,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A3517',
    borderWidth: 1,
    borderColor: COLORS.gold,
    borderRadius: 17,
    padding: 15,
    marginTop: 4,
  },
  bannerTitle: {
    color: '#FFF4E0',
    fontSize: 17,
    fontWeight: '800',
  },
  bannerCaption: {
    color: '#E8CDA6',
    fontSize: 10,
    marginTop: 7,
  },
  bannerShield: {
    width: 53,
    height: 58,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A210D',
    marginLeft: 12,
  },
  bannerShieldText: {
    color: '#FFF3DD',
    fontSize: 29,
    fontWeight: '900',
  },
  body: {
    paddingHorizontal: 16,
    paddingTop: 17,
  },
  helper: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: -7,
    marginBottom: 18,
    marginLeft: 3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -3,
    rowGap: 14,
  },
  gridItem: {
    width: '25%',
    paddingHorizontal: 3,
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7E9D4',
    borderRadius: 15,
    padding: 13,
    marginBottom: 14,
  },
  securityIcon: {
    color: COLORS.brown,
    fontSize: 23,
    marginRight: 10,
  },
  securityTitle: {
    color: COLORS.darkBrown,
    fontWeight: '800',
    fontSize: 13,
  },
  securityText: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 3,
  },
  chevron: {
    color: COLORS.brown,
    fontSize: 27,
    paddingHorizontal: 5,
  },
  disclaimer: {
    color: '#907D6B',
    fontSize: 10,
    lineHeight: 15,
    marginBottom: 6,
  },
  bottom: {
    backgroundColor: '#FFF9F0',
  },
  placeholderWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  placeholderIcon: {
    color: COLORS.gold,
    fontSize: 48,
    marginBottom: 12,
  },
  placeholderTitle: {
    color: COLORS.darkBrown,
    fontSize: 24,
    fontWeight: '900',
  },
  placeholderText: {
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: COLORS.brown,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 10,
  },
  backButtonText: {
    color: COLORS.cream,
    fontWeight: '800',
  },
});