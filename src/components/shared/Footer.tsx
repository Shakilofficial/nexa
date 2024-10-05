import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-600 dark:text-rose-400">
              About Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We are an e-commerce platform dedicated to providing high-quality
              products and excellent customer service.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-600 dark:text-rose-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-600 dark:text-rose-400">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              123 E-commerce St.
              <br />
              City, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-600 dark:text-rose-400">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for updates and promotions.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          © 2024 E-commerce App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
