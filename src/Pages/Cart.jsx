import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/file/getcart')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setCartItems(data);
        calculateTotalPrice(data);
      })
      .catch(error => {
        console.error('Error during fetch', error);
      });
  }, []);

  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  };

  const handleDelete = (cartId) => {
    fetch(`http://localhost:8080/file/deletecart/${cartId}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          const updatedCartItems = cartItems.filter(item => item.cartid !== cartId);
          setCartItems(updatedCartItems);
          calculateTotalPrice(updatedCartItems);
        } else {
          console.error('Failed to delete item.');
        }
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div>
      <h2 className='text-center'> Cart</h2>
      <div>
        {cartItems.map(item => (
          <div key={item.cartid} className="card">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleDelete(item.cartid)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}
export default Cart;
