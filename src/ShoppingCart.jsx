import { useState } from "react";

function ShoppingCart() {


    const [cart, setCart] = useState([]);


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

     function addProduct() {

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
      quantity: 1
    };


    setCart([...cart,newProduct]);


    
    setName("");

    setPrice("");
  }

   function increaseQuantity(id) {

    const updatedCart = cart.map((product) => {

      if(product.id === id){

    return {...product,quantity: product.quantity + 1};
    
        }

    return product;

    });

    setCart(updatedCart);
  }

   function decreaseQuantity(id) {

    const updatedCart = cart.map((product)=>{

      if(product.id === id && product.quantity > 1){

        return {...product,quantity: product.quantity - 1
        };

      }

      return product;

    });

    setCart(updatedCart);
  }

  function removeProduct(id){

    const updatedCart = cart.filter((product)=>{

      return product.id !== id;

    });


    setCart(updatedCart);

  }
  
  
  const totalPrice = cart.reduce(
    (total, product)=>{

      return total + (product.price * product.quantity);

    }, 
    0
  );



return (
  <div>

    <h1>Shopping Cart</h1>

    <input
      type="text"
      placeholder="Product Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />  

    <input
      type="number"
      placeholder="Product Price"
      value={price}
      onChange={(e)=>setPrice(e.target.value)}
    />

    <button onClick={addProduct}>
      Add To Cart
    </button>


    {
      cart.map((product)=>(
        <div key={product.id}>

          <h3>
            {product.name}
          </h3>

          <p>
            Price: ${product.price}
          </p>

          <p>
            Quantity: {product.quantity}
          </p>


          <button
            onClick={()=>decreaseQuantity(product.id)}
          >
            -
          </button>


          <button
            onClick={()=>increaseQuantity(product.id)}
          >
            +
          </button>


          <button
            onClick={()=>removeProduct(product.id)}
          >
            Remove
          </button>

        </div>
      ))
    }


    <h2>
      Total Price: ${totalPrice}
    </h2>

  </div>
);


}

















export default ShoppingCart;