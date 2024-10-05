import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Settings",
  description: "Manage your account settings and preferences",
};

export default function DashboardSettingsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        {/* Add your profile information form here */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Password Management</h2>
        {/* Add your password management form here */}
      </section>
    </main>
  );
}
