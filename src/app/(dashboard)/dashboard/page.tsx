"use client";

import LatestOrders from "@/components/dashboard/overview/LatestOrders";
import MostSoldItems from "@/components/dashboard/overview/MostSoldItems";
import RevenueChart from "@/components/dashboard/overview/RevenueChart";
import StatCard from "@/components/dashboard/overview/StatCard";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatCard
          title="Today's Sales"
          value="$20.4K"
          subtext="We have sold 123 items"
          color="bg-primary"
        />
        <StatCard
          title="Today's Revenue"
          value="$8.2K"
          subtext="Available to payout"
          color="bg-green-500"
        />
        <StatCard
          title="In Escrow"
          value="$18.2K"
          subtext="Available to payout"
          color="bg-orange-500"
        />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <RevenueChart className="col-span-full lg:col-span-2" />
        <MostSoldItems />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <LatestOrders />
      </motion.div>
    </div>
  );
}
