import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="Phone Number"
            content="+974 3118 1843"
          />
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            title="Email Address"
            content="Elbrithcqhr@gmail.com"
          />
          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            title="Office Location"
            content="Ambassador Street, Zone 61,"
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          {/* Logo Section */}
          <div>
            <img
              src="/Assets/logo.jpg"
              alt="Elbrit Life Sciences"
              className="max-w-[200px] bg-white p-2 rounded-lg"
            />
          </div>

          {/* Company Description */}
          <div className="text-gray-300 max-w-xl">
            <p>
              Your health, physical and emotional well-being is important 
              to us. We are always by your side and have made it even 
              easier for you to find the necessary vitamins.
            </p>
          </div>
        </div>

        {/* Footer Bottom / Address */}
        <div className="border-t border-teal-800 pt-6">
          <p className="text-sm text-gray-400">
            Elbrit Life Sciences Private Limited, C20, BKC, G Block, Mumbai 400051
          </p>
        </div>
      </div>
    </footer>
  );
};

// Contact Card Component
const ContactCard = ({ icon, title, content }) => {
  return (
    <div className="bg-teal-800 rounded-lg p-4 flex items-center space-x-4 hover:bg-teal-700 transition-colors">
      <div className="text-sky-300">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-300 text-sm mb-1">{title}</h3>
        <p className="font-medium">{content}</p>
      </div>
    </div>
  );
};

export default Footer;