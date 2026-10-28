// transactions.js — transaction helpers and demo data for RakshaPe.
// Demo records are examples only; they are NOT real bank/payment records.

export const transactionStatus = {
  SUCCESS: "success",
  PENDING: "pending",
  FAILED: "failed",
};

export const demoTransactions = [
  { id: "txn-demo-1001", type: "sent", title: "Sent to Ramesh", amount: 500, currency: "INR", status: "success", method: "UPI", date: "2026-10-27T09:41:00+05:30", demo: true },
  { id: "txn-demo-1002", type: "bill", title: "Electricity Bill", amount: 1250, currency: "INR", status: "success", method: "Demo bill payment", date: "2026-10-27T08:30:00+05:30", demo: true },
  { id: "txn-demo-1003", type: "received", title: "Received from Sneha", amount: 2000, currency: "INR", status: "success", method: "UPI", date: "2026-10-26T19:12:00+05:30", demo: true },
  { id: "txn-demo-1004", type: "recharge", title: "Mobile Recharge", amount: 299, currency: "INR", status: "pending", method: "Demo recharge", date: "2026-10-26T18:45:00+05:30", demo: true },
];

export function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number(amount) || 0);
}

export function getTransactionsByType(transactions = demoTransactions, type = "all") {
  if (type === "all") return transactions;
  return transactions.filter((transaction) => transaction.type === type);
}

export function getTransactionById(id, transactions = demoTransactions) {
  return transactions.find((transaction) => transaction.id === id) ?? null;
}

export function createDemoTransaction({
  title,
  amount,
  type = "sent",
  method = "Demo",
  status = transactionStatus.PENDING,
}) {
  if (!title || !String(title).trim()) throw new Error("Transaction title is required.");
  if (!Number.isFinite(Number(amount)) || Number(amount) < 0) {
    throw new Error("Amount must be a valid non-negative number.");
  }

  return {
    id: `txn-demo-${Date.now()}`,
    type,
    title: String(title).trim(),
    amount: Number(amount),
    currency: "INR",
    status,
    method,
    date: new Date().toISOString(),
    demo: true,
  };
}

export default demoTransactions;
