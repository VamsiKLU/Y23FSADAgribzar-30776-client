import React, { useEffect, useState } from 'react';
import axios from 'axios';

const APIProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (productTitle) => {
    alert(`${productTitle} has been added to your cart!`);
  };

  return (
    <div>
      <h1 style={{color:'white'}}>Mock Data Products</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              width: '250px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <h3
              style={{
                fontSize: '18px',
                margin: '10px 0',
                color: '#333',
              }}
            >
              {product.title}
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#000',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            >
              {product.description.length > 80
                ? product.description.slice(0, 80) + '...'
                : product.description}
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#000',
                marginBottom: '15px',
              }}
            >
              Price: ${product.price}
            </p>
            <div>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '10px',
                }}
                onClick={() => alert(`You have selected ${product.title}`)}
              >
                Buy
              </button>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => handleAddToCart(product.title)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default APIProducts;
