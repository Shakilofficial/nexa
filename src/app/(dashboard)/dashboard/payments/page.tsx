import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Payments",
  description: "View and manage your payment transactions",
};

export default function DashboardPaymentsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Payments Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        {/* Add a list or table of recent payment transactions */}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
        {/* Add a list of payment methods or integration options */}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Payment Analytics</h2>
        {/* Add charts or graphs for payment analytics */}
      </section>
    </main>
  );
}
