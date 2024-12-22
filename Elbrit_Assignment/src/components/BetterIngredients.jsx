import React from 'react';

const IngredientCard = ({ title, description, backgroundImage, bgColor = 'bg-blue-50' }) => (
  <div 
    className={`relative overflow-hidden rounded-lg ${bgColor} p-4 h-48 transition-transform hover:scale-105`}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    {/* Semi-transparent overlay to ensure text readability */}
    <div className="absolute inset-0 bg-white/60" />
    
    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-navy-800 font-bold text-lg mb-2">{title}</h3>
      <p className="text-navy-600 text-sm mb-4">{description}</p>
      <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">
        SEE MORE
      </button>
    </div>
  </div>
);

const BetterIngredients = () => {
  const ingredients = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      backgroundImage: "/Assets/h2-b1.jpg.png", // Replace with your actual image path
      bgColor: "bg-yellow-50"
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      backgroundImage: "/Assets/bn2-2.jpg.png", // Replace with your actual image path
      bgColor: "bg-blue-50"
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      backgroundImage: "/Assets/bn2-3.jpg.png", // Replace with your actual image path
      bgColor: "bg-green-50"
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      backgroundImage: "/Assets/bn2-4.jpg.png", // Replace with your actual image path
      bgColor: "bg-gray-50"
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      backgroundImage: "/Assets/bn2-5.jpg.png", // Replace with your actual image path
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Better Ingredients</h2>
        <p className="text-navy-600 text-sm">
          Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ingredients.map((ingredient, index) => (
          <IngredientCard
            key={index}
            title={ingredient.title}
            description={ingredient.description}
            backgroundImage={ingredient.backgroundImage}
            bgColor={ingredient.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default BetterIngredients;