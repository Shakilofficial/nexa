import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Transactions",
  description: "View and manage your financial transactions",
};

export default function DashboardTransactionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Transactions Dashboard </h1>
      {/* Add your transactions content here */}
    </main>
  );
}
