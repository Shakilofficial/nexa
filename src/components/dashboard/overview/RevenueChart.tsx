import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Jan", profit: 1000, loss: 400 },
  { month: "Feb", profit: 1500, loss: 300 },
  { month: "Mar", profit: 1200, loss: 200 },
  { month: "Apr", profit: 1800, loss: 500 },
  { month: "May", profit: 1400, loss: 300 },
  { month: "Jun", profit: 2000, loss: 400 },
  { month: "Jul", profit: 1900, loss: 300 },
  { month: "Aug", profit: 2200, loss: 500 },
  { month: "Sep", profit: 2400, loss: 400 },
];

interface RevenueChartProps {
  className?: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ className }) => (
  <Card className={className}>
    <CardHeader>
      <CardTitle>Total Revenue</CardTitle>
    </CardHeader>
    <CardContent>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold mb-2">$50.4K</div>
        <div className="text-sm text-green-600 mb-4">5% than last month</div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="profit" fill="hsl(var(--primary))" />
            <Bar dataKey="loss" fill="hsl(var(--destructive))" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </CardContent>
  </Card>
);

export default RevenueChart;
