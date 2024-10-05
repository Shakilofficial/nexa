"use client";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { headerNavItems } from "@/lib/constants";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {
  socialIcons?: Array<{
    Icon: React.ElementType;
    label: string;
    href?: string;
  }>;
  address?: string;
  phone?: string;
  email?: string;
}

const Footer: FC<FooterProps> = ({
  socialIcons = [
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: XIcon, label: "X", href: "#" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
  ],
  address = "123 E-commerce St., City, State 12345",
  phone = "(123) 456-7890",
  email = "info@example.com",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-rose-50 via-white to-rose-50 dark:from-gray-900 dark:to-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We are an e-commerce platform dedicated to providing high-quality
              products and excellent customer service.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-rose-600 transition-colors duration-300 ease-in-out transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-rose-600 dark:text-rose-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {headerNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 flex items-center group"
                  >
                    <item.icon
                      className="mr-3 group-hover:text-rose-600 transition-colors duration-300"
                      size={18}
                    />
                    <span className="border-b border-transparent group-hover:border-rose-600 pb-1 transition-all duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-rose-600 dark:text-rose-400">
              Contact Us
            </h3>
            <address className="text-gray-600 dark:text-gray-400 not-italic space-y-3">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-rose-500" />
                {address}
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-rose-500" />
                <a
                  href={`tel:${phone}`}
                  className="hover:text-rose-600 transition-colors duration-300"
                >
                  {phone}
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-rose-500" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-rose-600 transition-colors duration-300"
                >
                  {email}
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-rose-600 dark:text-rose-400">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for updates and promotions.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-rose-500 dark:focus:border-rose-500"
              />
              <Button variant="custom" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} E-commerce App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
