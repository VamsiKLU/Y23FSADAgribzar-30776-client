import React from "react";
import products from './product.json'; // Assuming the path is correct for your product.json file
import { Button, Card, CardContent, Typography, Grid, CardActions, CardHeader, CardMedia } from '@mui/material'; // Material UI components
import './Products.css'; // Assuming your CSS is in this file

function Products() {
  // Handle Add to Cart functionality (you can add your own logic here)
  const handleAddToCart = (supplierName) => {
    alert(`${supplierName}'s product has been added to your cart!`);
  };

  // Handle Buy functionality (you can add your own logic here)
  const handleBuy = (supplierName) => {
    alert(`You are buying a product from ${supplierName}`);
  };

  return (
    <div className="product-container">
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="product-card">
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt="Product Image"
              />
              <CardContent>
                <Typography variant="body2" className="product-description">
                  Quantity in Stock: {product.quantity}
                </Typography>
                <Typography variant="body2" className="product-harvest-date">
                  Harvest Date: {product.harvest_date}
                </Typography>
                <Typography variant="body2" className="product-expiration-date">
                  Expiration Date: {product.expiration_date}
                </Typography>
                <Typography variant="body2" className="product-supplier">
                  Supplier: {product.supplier_name}
                </Typography>
                <Typography variant="body2" className="product-organic">
                  Organic: {product.organic ? "Yes" : "No"}
                </Typography>
                <Typography variant="body2" className="product-nutritional-value">
                  Nutritional Value: {product.nutritional_value} kcal
                </Typography>
                <Typography variant="body2" className="product-storage-temperature">
                  Storage Temperature: {product.storage_temperature} °C
                </Typography>
                <Typography variant="body2" className="product-country-of-origin">
                  Country of Origin: {product.country_of_origin}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#1976d2", color: "white" }}
                  onClick={() => handleBuy(product.supplier_name)}
                  className="buy-button"
                >
                  Buy
                </Button>
                <Button
                  variant="outlined"
                  style={{ borderColor: "#ff9800", color: "#ff9800" }}
                  onClick={() => handleAddToCart(product.supplier_name)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
