import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';


export const Men = () => {

  const [categoryData, setCategoryData] = useState();
  const category="mens"

  const fetchData = () => {
    axios.get(`http://localhost:8080/file/findbycategory/${category}`)
      .then((res) => {
        console.log(res.data)
        setCategoryData(res.data)
        console.log(categoryData);
      })

      .catch((err) => {
        console.log("error", err);
      })

  };

  console.log(categoryData)
  useEffect(() => {
    fetchData();
  }, [])
  const CartSend = (categoryData) => {
    let cc = {
      productName: categoryData.productName,
      description: categoryData.description,
      price: categoryData.price,
      productImage: categoryData.productImage,
      category: categoryData.category
    }

    console.log(cc)
    fetch("http://localhost:8080/file/addcart", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(cc)
    })
      .then((response) => {
        console.log("Data received " + response);
        alert("Product Added to Cart..!");
      })

  }
  return (


    <div>
      <h1 className='text-center'>Mens</h1>
      <div className="container">
        <div className='row'>
          {Array.isArray(categoryData) && categoryData.map((post) => (
            <div className="card m-2 col-12 col-sm-6 col-md-4 col-lg-3" key={post.id}>
              <img src={`http://localhost:8080/uploads/${post.productImage}`} style={{ height: "200px", width: "100%" }} className="card-img-top" alt='mensimage' />
              <div className='card-body'>
                <h5 className='card-title'>{post.name}</h5>
                <p>Description: <b style={{ fontSize: "larger" }}>{post.description}</b></p>
                <p>Price: <b style={{ fontSize: "larger" }}>{post.price}</b></p>
                <button onClick={() => CartSend(post)} >Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Men;