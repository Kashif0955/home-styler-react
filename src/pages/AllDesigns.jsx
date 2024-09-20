import React from 'react';
import { IconShoppingCart } from '@tabler/icons-react'; // Ensure this icon package is installed

const AllDesigns = () => {
  return (
    <section className="text-gray-300" style={{ backgroundColor: '#12151A' }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-4">
            Design Gallery
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-400">
            Discover stunning designs that elevate your space and inspire creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced gap */}
          {items.map((item, index) => (
            <DesignCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              price={item.price}
              isWide={index % 3 === 0} // Make every 3rd item wide
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const DesignCard = ({ imageSrc, title, description, price, isWide }) => {
  return (
    <div className={`flex flex-col ${isWide ? 'md:col-span-2' : 'md:col-span-1'} p-4`}>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"> {/* Added hover effect */}
        <img
          alt="gallery"
          className="w-full object-cover h-64 transition duration-300"
          src={imageSrc}
        />
        <div className="p-4">
          <h2 className="font-semibold text-xl text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-800 font-bold text-lg">{price}</span>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
              <IconShoppingCart className="h-5 w-5 mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



const items = [
  {
    imageSrc: "public/assets/img/alldesings/25.jpeg",
    title: "Elegant Design",
    description: "Experience the blend of modern aesthetics and functionality.",
    price: "$99.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/1.jpeg",
    title: "Minimalist Approach",
    description: "Simplicity at its best for a clutter-free environment.",
    price: "$79.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/2.jpg",
    title: "Artistic Touch",
    description: "Bring your walls to life with stunning artworks.",
    price: "$129.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/28.jpeg",
    title: "Nature Inspired",
    description: "Integrate natural elements for a soothing ambiance.",
    price: "$89.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/3.jpeg",
    title: "Industrial Vibe",
    description: "Embrace the raw beauty of industrial design.",
    price: "$149.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/4.jpeg",
    title: "Vintage Revival",
    description: "Classic designs that never go out of style.",
    price: "$59.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/5.jpeg",
    title: "Contemporary Chic",
    description: "Modern elegance with a touch of class.",
    price: "$119.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/30.webp",
    title: "Rustic Charm",
    description: "Bring warmth and character to your space.",
    price: "$69.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/29.webp",
    title: "Scandinavian Style",
    description: "Functional designs with clean lines and natural materials.",
    price: "$129.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/28.jpeg",
    title: "Bold Patterns",
    description: "Make a statement with vibrant colors and unique prints.",
    price: "$89.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/27.jpeg",
    title: "Urban Elegance",
    description: "Sophisticated designs for the modern city dweller.",
    price: "$109.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/26.webp",
    title: "Bohemian Bliss",
    description: "Eclectic styles that express your individuality.",
    price: "$79.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/25.jpeg",
    title: "Coastal Retreat",
    description: "Inspired by the beauty of the ocean and shore.",
    price: "$99.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/24.webp",
    title: "Luxury Living",
    description: "Indulge in opulent designs and exquisite materials.",
    price: "$299.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/23.webp",
    title: "Classic Elegance",
    description: "Timeless designs that never go out of style.",
    price: "$149.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/22.jpeg",
    title: "Statement Furniture",
    description: "Bold pieces that become the focal point of any room.",
    price: "$249.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/21.webp",
    title: "Outdoor Oasis",
    description: "Create a relaxing outdoor space to unwind.",
    price: "$199.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/20.jpeg",
    title: "Kids' Corner",
    description: "Fun and playful designs for children's spaces.",
    price: "$79.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/10.jpeg",
    title: "Elegant Lighting",
    description: "Illuminate your space with stylish light fixtures.",
    price: "$89.99",
  },
  {
    imageSrc: "public/assets/img/alldesings/9.jpeg",
    title: "Textured Layers",
    description: "Add depth and character with textured designs.",
    price: "$109.99",
  },
];

export default AllDesigns;




