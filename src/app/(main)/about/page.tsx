import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://github.com/m-abdullah-dev.png"
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            At [Your Company Name], we are dedicated to [brief mission
            statement]. Our passion for [your industry/field] drives us to
            deliver exceptional [products/services] that make a difference in
            the lives of our customers.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in [year], [Your Company Name] has grown from a small
            startup to a leader in [your industry]. Our journey has been marked
            by innovation, dedication, and a commitment to excellence.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Innovation", "Integrity", "Customer Focus"].map((value, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">{value}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">
          We'd love to hear from you! Reach out to us for any inquiries or
          collaborations.
        </p>
        <a
          href="mailto:contact@yourcompany.com"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
