import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const mostSoldItems = [
  { name: "Jeans", percentage: 70 },
  { name: "Shirts", percentage: 40 },
  { name: "Belts", percentage: 60 },
  { name: "Caps", percentage: 80 },
  { name: "Others", percentage: 20 },
];

const MostSoldItems: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Most Sold Items</CardTitle>
    </CardHeader>
    <CardContent>
      {mostSoldItems.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-4"
        >
          <div className="flex justify-between mb-1">
            <span>{item.name}</span>
            <span>{item.percentage}%</span>
          </div>
          <Progress value={item.percentage} className="h-2" />
        </motion.div>
      ))}
    </CardContent>
  </Card>
);

export default MostSoldItems;
