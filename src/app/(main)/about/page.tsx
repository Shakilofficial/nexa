"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Jane Smith",
      role: "Head of Design",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      image: "https://github.com/shadcn.png",
    },
    {
      name: "Sarah Brown",
      role: "Customer Relations",
      image: "https://github.com/shadcn.png",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: "Passion",
      description:
        "We are passionate about delivering the best products and experiences to our customers.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Quality",
      description:
        "We ensure that every product we offer meets our high standards of quality.",
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "Reliability",
      description:
        "Our customers can always count on us for timely delivery and excellent service.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-purple-500" />,
      title: "Innovation",
      description:
        "We constantly innovate to bring the latest trends and technologies to our customers.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          {...fadeIn}
        >
          About Our E-commerce Journey
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          {...fadeIn}
        >
          We&apos;re more than just an online store. We&apos;re a passionate team
          dedicated to bringing you the best products and shopping experience
          possible.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div {...fadeIn}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Our Story
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Founded in 2010, our e-commerce platform started as a small
                  operation run by tech enthusiasts. Over the years, we&apos;ve grown
                  into a leading online marketplace, connecting customers with
                  high-quality products from around the world.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeIn}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive to revolutionize online shopping by providing a
                  seamless, enjoyable experience for our customers. Our goal is
                  to offer a curated selection of products that enhance people&apos;s
                  lives, backed by exceptional customer service.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white"
          {...fadeIn}
        >
          Meet Our Team
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} {...fadeIn}>
              <Card className="overflow-hidden">
                <div className="w-full h-48 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white"
          {...fadeIn}
        >
          Our Values
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {values.map((value, index) => (
            <motion.div key={index} {...fadeIn}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" {...fadeIn}>
          <Button size="lg" variant="custom">
            Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
