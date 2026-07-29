import { useState, useContext } from "react";
import CartContext from "./CartContext";


function ProductItem() {
  const { addToCart } = useContext(CartContext);

  const product = {
    id: 1,
    name: "Laptop",
    price: 500,
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

// Cart Summary Component
function CartSummary() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <h2>Cart Summary</h2>

      <p>Total Items: {cartItems.length}</p>

      <p>Total Price: ${totalPrice}</p>

      {cartItems.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ${item.price}
          </span>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

function ShoppingCartContext() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      <div>
        <h1>Shopping Cart Context</h1>

        <ProductItem />

    

        <CartSummary />
      </div>
    </CartContext.Provider>
  );
}

export default ShoppingCartContext;