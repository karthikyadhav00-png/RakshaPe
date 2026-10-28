// features.js — RakshaPe feature catalog
// Data/config only. Wire payment features to an authorized provider before live use.

export const features = [
  { id: "app-pin", title: "App PIN", description: "Unlock RakshaPe with an app PIN", category: "Security", icon: "lock" },
  { id: "fingerprint", title: "Fingerprint Login", description: "Unlock with device biometrics", category: "Security", icon: "fingerprint" },
  { id: "time-pin", title: "Time-Based PIN", description: "Restrict app access to configured hours", category: "Security", icon: "clock" },
  { id: "decoy-pin", title: "Decoy PIN", description: "Open a separate demo view", category: "Security", icon: "mask" },
  { id: "duress-pin", title: "Duress PIN", description: "Show a safe demo mode", category: "Security", icon: "alert-triangle" },
  { id: "hidden-balance", title: "Hidden Balance", description: "Hide balance values on screen", category: "Privacy", icon: "eye-off" },
  { id: "privacy-view", title: "Privacy View", description: "Show demo/limited balance view", category: "Privacy", icon: "eye" },
  { id: "send-money", title: "Send Money", description: "Start a payment flow", category: "Payments", icon: "send" },
  { id: "scan-pay", title: "Scan QR", description: "Scan a payment QR code", category: "Payments", icon: "qr-code" },
  { id: "upi-id", title: "To UPI ID", description: "Pay using a UPI ID", category: "Payments", icon: "landmark" },
  { id: "bank-transfer", title: "To Bank", description: "Start a bank transfer flow", category: "Payments", icon: "building-2" },
  { id: "mobile-recharge", title: "Mobile Recharge", description: "Open mobile recharge flow", category: "Bills", icon: "smartphone" },
  { id: "electricity", title: "Electricity Bill", description: "Pay an electricity bill", category: "Bills", icon: "zap" },
  { id: "water", title: "Water Bill", description: "Pay a water bill", category: "Bills", icon: "droplet" },
  { id: "gas", title: "Gas Bill", description: "Pay a gas bill", category: "Bills", icon: "flame" },
  { id: "broadband", title: "Broadband Bill", description: "Pay a broadband bill", category: "Bills", icon: "wifi" },
  { id: "fastag", title: "FASTag Recharge", description: "Recharge FASTag", category: "Bills", icon: "car" },
  { id: "history", title: "Transaction History", description: "View payment activity", category: "Activity", icon: "history" },
  { id: "profile", title: "Profile & Settings", description: "Manage your profile and preferences", category: "Account", icon: "user" },
];

export const rakshaPeTheme = {
  colors: {
    primary: "#5B3025",
    primaryDark: "#32170F",
    gold: "#C99A45",
    cream: "#FFF8E9",
    surface: "#FFFFFF",
    text: "#352018",
    muted: "#8B7769",
    border: "#E7D8C4",
    success: "#287D50",
    danger: "#B42318",
  },
  appName: "RakshaPe",
  tagline: "Your Money. Always Protected.",
};
export default features;
