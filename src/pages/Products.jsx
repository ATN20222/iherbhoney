// YourComponent.js
import React, { useEffect, useState } from 'react';
import { productService } from '../services/Services.js';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await productService.getAllProducts();
        setProducts(productsData);
        // console.log("sbdha");
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      
      <div className="container">
        <div className="row">
        {products.map((product) => (
          <div className="col-lg-2 card">
            <div className='ProductImage'>
            <img src={product.image} alt="" width="50%" />
            </div>
            <div className="TitleContainer">
              <span key={product.id}>{product.title}</span>
            </div>
            <div className="PriceContainer">
              <span key={product.id}>{product.price}$</span>
            </div>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
};

export default Products;
