import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dr. Sharma</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-200">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-200">
            Services
          </Link>
          <Link to="/appointment" className="hover:text-blue-200">
            Appointment
          </Link>
          <Link to="/contact" className="hover:text-blue-200">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 mt-4 p-4 rounded-lg absolute left-4 right-4">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="hover:text-blue-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/appointment"
              className="hover:text-blue-200"
              onClick={() => setIsOpen(false)}
            >
              Appointment
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
    <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 mb-8 md:mb-0">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Caring for Your Health
      </h2>
      <p className="text-base sm:text-lg px-2 sm:px-4 md:px-0">
        Meet <strong>Dr. Sharma</strong> — your trusted health partner in
        Kathmandu, Nepal.
      </p>

      {/* Buttons: stack on mobile, side by side on larger screens */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
        <a
          href="tel:+9779812345678"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition text-center"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/9779812345678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600 transition text-center"
        >
          WhatsApp
        </a>
      </div>
    </div>

    {/* Image: gets bigger as screen size increases */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src="/images/doctor.jpg"
        alt="Dr. Sharma - Professional Doctor"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
      />
    </div>
  </section>
);

const About = () => (
  <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white text-gray-800">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
        About Dr. Sharma
      </h2>
      <p className="text-base sm:text-lg leading-relaxed">
        Dr. Sharma is a renowned general practitioner based in Kathmandu, Nepal,
        dedicated to providing compassionate and professional healthcare
        services. With years of experience, he offers trusted medical advice and
        care for patients of all ages.
      </p>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "General Consultation",
      desc: "Comprehensive medical checkups and advice.",
    },
    { title: "Pediatrics", desc: "Special care and treatment for children." },
    {
      title: "Vaccinations",
      desc: "Routine immunizations and travel vaccines.",
    },
    {
      title: "Chronic Disease Care",
      desc: "Management for diabetes, hypertension, and more.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-8 sm:mb-10 text-center">
          Our Services
        </h2>

        {/* Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white shadow-lg p-4 sm:p-6 rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                {s.title}
              </h3>
              <p className="text-sm sm:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-blue-600 text-white text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
      What Our Patients Say
    </h2>

    {/* Grid: 1 column on mobile, 3 on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
      <div className="bg-blue-500 p-4 sm:p-6 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          “Dr. Sharma is kind, patient, and very professional. Highly
          recommended!”
        </p>
        <h4 className="mt-4 font-semibold">– Anita, Kathmandu</h4>
      </div>
      <div className="bg-blue-500 p-4 sm:p-6 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          “I always feel comfortable discussing my health concerns with Dr.
          Sharma.”
        </p>
        <h4 className="mt-4 font-semibold">– Raj, Lalitpur</h4>
      </div>
      <div className="bg-blue-500 p-4 sm:p-6 rounded-lg shadow-md">
        <p className="text-sm sm:text-base">
          “Excellent care and great communication. Very trustworthy.”
        </p>
        <h4 className="mt-4 font-semibold">– Sita, Bhaktapur</h4>
      </div>
    </div>
  </section>
);

const Appointment = () => (
  <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50 text-gray-800">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
        Book an Appointment
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 text-center">
        <p className="text-lg sm:text-xl mb-6">
          📞 Call us directly to schedule your appointment
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="tel:+9779812345678"
            className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition text-lg flex items-center justify-center gap-2"
          >
            <span>📱</span> Call Now
          </a>

          <a
            href="https://wa.me/9779812345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-green-600 transition text-lg flex items-center justify-center gap-2"
          >
            <span>💬</span> WhatsApp
          </a>
        </div>

        <div className="border-t pt-6">
          <p className="text-gray-600 mb-2">Or email us at:</p>
          <a
            href="mailto:appointments@drsharma.com"
            className="text-blue-600 text-lg hover:underline"
          >
            appointments@drsharma.com
          </a>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            ⏰ Office Hours: Mon-Fri 9:00 AM - 5:00 PM | Sat 9:00 AM - 1:00 PM
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white text-gray-800">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
        Contact Us
      </h2>

      {/* Stack on mobile, side by side on desktop */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
        <div className="md:w-1/2 space-y-3 sm:space-y-4">
          <p className="text-base sm:text-lg">
            <strong>Location:</strong> Kathmandu, Nepal
          </p>
          <p className="text-base sm:text-lg">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+9779812345678"
              className="text-blue-600 hover:underline"
            >
              +9779812345678
            </a>
          </p>
          <p className="text-base sm:text-lg">
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/9779812345678"
              className="text-green-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message
            </a>
          </p>
        </div>

        {/* Map - full width on mobile */}
        <div className="md:w-1/2">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.107071271612!2d85.3173393!3d27.7207911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190df35c4a27%3A0x7a3e5a7997f476ae!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1717220443271!5m2!1sen!2snp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg sm:h-[300px]"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-700 text-white py-4 sm:py-6 px-4 text-center">
    <p className="text-sm sm:text-base">
      &copy; {new Date().getFullYear()} Dr. Sharma Clinic, Kathmandu, Nepal. All
      rights reserved.
    </p>
  </footer>
);

const Home = () => (
  <>
    <Hero />
    <Services />
    <Testimonials />
  </>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
