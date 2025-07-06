"use client";
import React from "react";
import { motion } from "motion/react";
import { IconType } from "react-icons";

interface ProductCardProps {
  product: {
    title: string;
    description: string;
    icon: IconType;
    buttonText: string;
  };
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateZ: 0.5,
        boxShadow: "0 10px 25px -5px rgba(46, 139, 87, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="border p-6 rounded-lg shadow-md hover:shadow-lg text-center grid gap-4"
    >
      {product.icon && <product.icon size={56} className="mx-auto" />}
      <div>
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="mb-4 text-sm">{product.description}</p>
      </div>
      <button className="bg-green-900 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-950">
        {product.buttonText}
      </button>
    </motion.div>
  );
};

export default ProductCard;
