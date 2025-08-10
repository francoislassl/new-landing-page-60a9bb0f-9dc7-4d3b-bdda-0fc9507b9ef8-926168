import React from 'react';

// LandingPage component definition
const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">GoCohort</h1>
        <div className="space-x-4">
          <a href="#features" className="hover:text-blue-500 transition duration-300">Features</a>
          <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
          <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Ads with AI</h2>
        <p className="text-lg md:text-xl mb-8">Create efficient and profitable ads effortlessly with GoCohort's AI-driven solutions.</p>
        <a href="#" className="bg-white text-blue-700 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">Get Started</a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">AI-Powered Creatives</h4>
              <p className="text-gray-600">Leverage AI to create stunning creatives that captivate your audience.</p>
            </div>
            {/* Feature Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Integrated Landing Pages</h4>
              <p className="text-gray-600">Design landing pages that seamlessly integrate with your ad campaigns.</p>
            </div>
            {/* Feature Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Feedback Loop</h4>
              <p className="text-gray-600">Optimize your campaigns using real-time feedback and analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">About GoCohort</h3>
          <p className="text-lg max-w-2xl mx-auto">
            GoCohort is dedicated to helping businesses harness the power of AI in advertising. Our platform is designed to streamline the ad creation process, allowing you to focus on what matters most: growing your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Get in Touch</h3>
          <p className="mb-4">Have questions? We're here to help!</p>
          <a href="#" className="bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;