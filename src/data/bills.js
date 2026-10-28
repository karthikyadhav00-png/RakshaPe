// bills.js — bill categories and validation helpers for RakshaPe.
// This module does not initiate or complete real bill payments.

export const billCategories = [
  { id: "mobile", title: "Mobile Recharge", icon: "smartphone", fields: ["mobileNumber", "operator", "plan"] },
  { id: "electricity", title: "Electricity Bill", icon: "zap", fields: ["consumerNumber", "provider"] },
  { id: "water", title: "Water Bill", icon: "droplet", fields: ["consumerNumber", "provider"] },
  { id: "gas", title: "Gas Bill", icon: "flame", fields: ["consumerNumber", "provider"] },
  { id: "broadband", title: "Broadband Bill", icon: "wifi", fields: ["accountNumber", "provider"] },
  { id: "dth", title: "DTH Recharge", icon: "tv", fields: ["subscriberNumber", "provider"] },
  { id: "fastag", title: "FASTag Recharge", icon: "car", fields: ["vehicleNumber", "issuer"] },
  { id: "credit-card", title: "Credit Card Payment", icon: "credit-card", fields: ["cardLastFour", "amount"] },
  { id: "education", title: "Education Payment", icon: "graduation-cap", fields: ["studentId", "institution"] },
  { id: "housing-society", title: "Housing Society", icon: "house", fields: ["flatNumber", "society"] },
];

export const demoBills = [
  { id: "bill-demo-101", category: "electricity", title: "Electricity Bill", provider: "Demo provider", amount: 1250, dueDate: null, status: "unpaid", demo: true },
  { id: "bill-demo-102", category: "mobile", title: "Mobile Recharge", provider: "Demo operator", amount: 299, dueDate: null, status: "draft", demo: true },
];

export function getBillCategory(categoryId) {
  return billCategories.find((category) => category.id === categoryId) ?? null;
}

export function validateBillAmount(amount) {
  const value = Number(amount);
  return Number.isFinite(value) && value > 0;
}

export function createDemoBill({ category, title, provider = "Demo provider", amount }) {
  const categoryInfo = getBillCategory(category);
  if (!categoryInfo) throw new Error("Select a valid bill category.");
  if (!validateBillAmount(amount)) throw new Error("Bill amount must be greater than zero.");

  return {
    id: `bill-demo-${Date.now()}`,
    category,
    title: title || categoryInfo.title,
    provider,
    amount: Number(amount),
    dueDate: null,
    status: "draft",
    demo: true,
  };
}

export default billCategories;
