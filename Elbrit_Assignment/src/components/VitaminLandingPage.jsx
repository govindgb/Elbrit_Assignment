import React from 'react';
import { Beaker, Leaf, Flag, ShoppingCart, Shield, Recycle } from 'lucide-react';

const VitaminLandingPage = () => {
  return (
    <div className="bg-sky-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-12">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-4xl font-bold text-navy-900">Essential Vitamins</h1>
            <div className="space-y-4">
              <p className="text-gray-600">Online Medical Supplies</p>
              <h2 className="text-xl font-semibold">Get Your Vitamins & Minerals</h2>
              <button className="bg-teal-800 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition">
                EXPLORE
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="bg-yellow-100 rounded-lg p-6 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <img
                src="/Assets/f2-1.png.png"
                alt="Vitamin Bottle"
                className="w-48 md:w-56 transform -rotate-12 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="order-3 space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-teal-800 p-2 rounded-full flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-teal-800 rounded-2xl p-6 md:p-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center text-white p-4 hover:bg-teal-700 rounded-xl transition-colors">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-teal-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Vitamins",
    description: "Complete vitamins and minerals in your diet",
    icon: <Beaker className="w-5 h-5 text-white" />
  },
  {
    title: "Weight Loss",
    description: "Real scientifically proven solutions",
    icon: <ShoppingCart className="w-5 h-5 text-white" />
  },
  {
    title: "Functional Foods",
    description: "From protein powers to daily formula",
    icon: <Leaf className="w-5 h-5 text-white" />
  }
];

// Benefits data
const benefits = [
  {
    title: "Clinically Studied",
    description: "All products that we offer have undergone lab and safety tests",
    icon: <Beaker className="w-6 h-6 text-teal-800" />
  },
  {
    title: "Vegetarian Friendly",
    description: "We have a wide selection of vegetarian products to meet your needs",
    icon: <Leaf className="w-6 h-6 text-teal-800" />
  },
  {
    title: "Made In India",
    description: "Shop now and explore health products made right here in India",
    icon: <Flag className="w-6 h-6 text-teal-800" />
  },
  {
    title: "Free Shipping",
    description: "We deliver to your door with no shipping costs on your orders",
    icon: <ShoppingCart className="w-6 h-6 text-teal-800" />
  },
  {
    title: "No Risk",
    description: "We ensure that all products are safe and strict then only we sale",
    icon: <Shield className="w-6 h-6 text-teal-800" />
  },
  {
    title: "GMO Free",
    description: "Natural, no modified products and delicacies to those who need it",
    icon: <Recycle className="w-6 h-6 text-teal-800" />
  }
];

export default VitaminLandingPage;
