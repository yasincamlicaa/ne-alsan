import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { Container, Row } from "react-bootstrap";
import "./ProductList.css";
import data from "../../data.json";

interface Product {
  id: number;
  name: string;
  stock: number;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(data);

  return (
    <div className="product-list">
      <Container fluid={true}>
        <Row className="row-cols-lg-4 row-cols-md-6 justify-content-between">
          {products.map((product) => (
            <ProductItem
              product={product}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
