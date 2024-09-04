import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, onAddToCart, onAddToFavorites,handleBuyNow }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
          onAddToFavorites={onAddToFavorites} 
          onBuyNow={handleBuyNow}
        />
      ))}
    </div>
  );
}

export default ProductList;
