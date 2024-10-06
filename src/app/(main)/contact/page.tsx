"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const GlobeScene = dynamic(() => import("@/components/GlobeScene"), {
  ssr: false,
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground"
          {...fadeIn}
        >
          Get In Touch
        </motion.h1>

        <motion.div {...fadeIn} className="mb-12">
          <GlobeScene />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div {...fadeIn}>
            <Card className="h-full shadow-lg rounded-[var(--radius)] border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Drop Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full py-3 px-4 bg-input text-foreground rounded-[var(--radius)] focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full py-3 px-4 bg-input text-foreground rounded-[var(--radius)] focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full py-3 px-4 bg-input text-foreground rounded-[var(--radius)] focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={5}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 px-6 rounded-[var(--radius)] transition duration-300 ease-in-out flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeIn}>
            <Card className="h-full shadow-lg rounded-[var(--radius)] border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <p className="text-muted-foreground">
                      support@yourcompany.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <p className="text-muted-foreground">
                      123 E-commerce St, Digital City, 12345
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div {...fadeIn}>
          <Card className="shadow-lg rounded-[var(--radius)] border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-card-foreground">
                Find Us on the Map
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718253!2d-73.98823492404045!3d40.74844097138399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682805705378!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
