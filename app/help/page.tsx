"use client";
import { Mail, MessageSquare, Globe, Info, MapPin, Users } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="h-[80px] w-full bg-blue-900"></div>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-emerald-50 pt-6 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Need Help? 🌍
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to guide you! Whether you're exploring new destinations
              or connecting with local hosts, this page will help you make the
              most of your journey.
            </p>
          </div>

          {/* How It Works Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe className="text-blue-600" /> How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
                <MapPin className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Discover Experiences
                </h3>
                <p className="text-gray-600">
                  Browse authentic travel experiences curated by locals and
                  explore hidden gems across regions.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
                <Users className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Connect with Locals
                </h3>
                <p className="text-gray-600">
                  Chat with verified local hosts, learn their culture, and plan
                  trips that feel truly authentic.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
                <Info className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Travel Smart
                </h3>
                <p className="text-gray-600">
                  Get real-time guidance, cultural tips, and regional language
                  support throughout your journey.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MessageSquare className="text-purple-600" /> Frequently Asked
              Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">
                  💡 How do I create my profile?
                </h3>
                <p className="text-gray-600 mt-2">
                  Go to your profile section, add your details, and personalize
                  your travel interests — it helps locals suggest better
                  experiences for you.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">
                  🌏 How can I find local hosts or guides?
                </h3>
                <p className="text-gray-600 mt-2">
                  Visit the "Explore" page and filter by city or activity —
                  you’ll find verified hosts with details and ratings.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-800">
                  💬 Can I chat with hosts before booking?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes! You can message hosts directly through our chat feature
                  to discuss availability or customize your trip.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-white shadow-lg rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-2">
              <Mail className="text-pink-600" /> Still Need Assistance?
            </h2>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to help with any issues or
              travel queries you have.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-full shadow-lg hover:opacity-90 transition-all"
            >
              Contact Support
            </Link>
          </section>

          <footer className="text-center text-gray-500 mt-12 text-sm">
            © {new Date().getFullYear()} TravelConnect — Making travel
            meaningful 🌿
          </footer>
        </div>
      </div>
    </>
  );
};

export default page;
