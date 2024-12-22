import React from 'react';

const BlogGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <div className="border border-blue-500 inline-block w-full max-w-2xl px-8 py-4">
          <p className="text-sm text-gray-600 uppercase mb-1">OUR BLOG</p>
          <h2 className="text-3xl font-bold text-navy-900">Latest News</h2>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Column */}
        <div className="space-y-6">
          <BlogCard
            image="/Assets/blog1-450x580.jpg.png"
            date="20 APR"
            title="The Covid-19 Epidemic In 2022 Is Back"
            large={true}
          />
          <BlogCard
            image="/Assets/blog2-450x580.jpg.png"
            date="20 APR"
            title="The Covid-19 Epidemic In 2023 Is Back"
          />
        </div>

        {/* Second Column */}
        <div className="space-y-6">
          <BlogCard
            image="/Assets/blog1-450x580.jpg.png"
            date="20 APR"
            title="The Covid-19 Epidemic In 2022 Is Back"
          />
          <BlogCard
            image="/Assets/blog2-450x580.jpg.png"
            date="20 APR"
            title="The Covid-19 Epidemic In 2023 Is Back"
            large={true}
          />
        </div>

        {/* Third Column */}
        <div className="space-y-6">
          <BlogCard
            image="/Assets/blog1-450x580.jpg.png"
            date="20 APR"
            title="The Covid-19 Epidemic In 2022 Is Back"
            large={true}
          />
          <BlogCard
            image="/Assets/blog2-450x580.jpg.png"
            date="20 APR"
            title="The Covid-19 Epidemic In 2023 Is Back"
          />
        </div>

        {/* Fourth Column */}
        <div className="space-y-6">
          <BlogCard
            image="/Assets/blog1-450x580.jpg.png"
            date="20 APR"
            title="The Covid-19 Epidemic In 2022 Is Back"
          />
          <BlogCard
            image="/Assets/blog2-450x580.jpg.png"
            date="17 MAR"
            title="Hac hendrerit mus nons semper suspendisse"
            large={true}
          />
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ image, date, title, large = false }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-lg group cursor-pointer
        ${large ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        {/* Date Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-900 text-white text-xs px-3 py-1 rounded">
            {date}
          </span>
        </div>
        
        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-lg leading-tight">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;