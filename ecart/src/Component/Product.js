import React from "react";
import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const cards = products.map((product, index) => (
    <div
      className="col-md-2"
      key={index}
      style={{
        border: "1px solid black",
        margin: "15px",
        boxShadow: "3px 3px #888888",
        borderRadius: "10px",
        marginLeft: "30px",
      }}
    >
      <div className="text-center">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
          style={{ width: "100px", height: "130px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title.slice(0,30)}</h5>
        <p className="card-text">
        INR :{product.price  }
        </p>
        
       
      </div>
      <footer>
      <div style={{display:'flex',justifyContent:"center",alignItems:'center',marginBottom:0}}>
        <a href="#" className="btn btn-primary" >
          Add to Cart
        </a>
        </div>
      </footer>
    </div>
  ));

  return (
    <>
      <h3 style={{display:'flex',justifyContent:'center' }}>Product Dashboard</h3>
      <div className="row"> {cards}</div>
    </>
  );
}

export default Product;
