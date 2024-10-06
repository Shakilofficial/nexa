"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

// Mock product data
const products = [
  { id: 1, name: "Product 1", price: 19.99, category: "Electronics" },
  { id: 2, name: "Product 2", price: 29.99, category: "Clothing" },
  { id: 3, name: "Product 3", price: 39.99, category: "Home" },
  { id: 4, name: "Product 4", price: 49.99, category: "Electronics" },
  { id: 5, name: "Product 5", price: 59.99, category: "Clothing" },
  { id: 6, name: "Product 6", price: 69.99, category: "Home" },
  // Add more products as needed
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground"
          {...fadeIn}
        >
          Our Products
        </motion.h1>

        <motion.div {...fadeIn} className="mb-8">
          <div className="flex items-center justify-center">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mr-2"
            />
            <Button>
              <Search className="h-4 w-4 mr-2" /> Search
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} {...fadeIn}>
              <Card className="h-full shadow-lg rounded-[var(--radius)] border-border">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-card-foreground">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    {product.category}
                  </p>
                  <p className="text-primary font-bold">${product.price}</p>
                  <Button className="mt-4 w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
