import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        Welcome to Our E-commerce Store
      </h1>
      <p className="text-xl mb-8 text-center text-gray-600 dark:text-gray-400">
        Discover amazing products at great prices!
      </p>
      <div className="flex justify-center">
        <Button variant="custom" size="lg">Shop Now</Button>
      </div>
    </div>
  );
}
