import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Products",
  description: "Manage your product inventory and listings",
};

export default function DashboardProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Products Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Product Inventory</h2>
        {/* Add your product list or grid here */}
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Product Management</h2>
        {/* Add product management tools, like add/edit buttons */}
      </section>
    </main>
  );
}
