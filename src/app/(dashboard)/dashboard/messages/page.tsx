import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Messages",
  description: "View and manage your messages and communications",
};

export default function DashboardMessagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border border-primary rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Inbox</h2>
          <p className="">You have 12 new messages.</p>
        </div>
        <div className="p-4 border border-secondary rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Sent</h2>
          <p className="">You have sent 5 messages.</p>
        </div>
      </div>
    </main>
  );
}
