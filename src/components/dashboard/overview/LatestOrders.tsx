import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

const latestOrders = [
  {
    product: "iPhone 13 Pro",
    orderId: "#11232",
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "Delivered",
    amount: "$400.00",
  },
  {
    product: "Macbook Pro",
    orderId: "#11232",
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "Pending",
    amount: "$288.00",
  },
  {
    product: "Apple Watch",
    orderId: "#11232",
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "Canceled",
    amount: "$500.00",
  },
  {
    product: "Microsoft Book",
    orderId: "#11232",
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "Delivered",
    amount: "$100.00",
  },
  {
    product: "Apple Pen",
    orderId: "#11232",
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "Delivered",
    amount: "$60.00",
  },
  {
    product: "Airpods",
    orderId: "#11232",
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "Delivered",
    amount: "$80.00",
  },
];

const LatestOrders: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Latest Orders</CardTitle>
    </CardHeader>
    <CardContent className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latestOrders.map((order, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "Delivered"
                      ? "bg-green-200 text-green-800"
                      : order.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  •••
                </Button>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default LatestOrders;
