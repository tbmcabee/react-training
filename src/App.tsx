import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { produce } from "immer";

function App() {
  let items = ["New York", "San Fransico", "London", "Paris"];

  const [cart, setCart] = useState({
    discount: .1, 
    items: [{id: 1, title: 'Product 1', quantity: 1},
    {id: 2, title: 'Product 2', quantity: 1}
    ]});

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Tallon"
    }
  });

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni', 
    toppings: ['Mushroom']
  });

  const handleCartClick = () => {
    setCart({...cart, items: 
      [...cart.items.map(item => item.id === 1 ? 
        {...item, quantity: item.quantity + 1} : item)
      ]})
  }

  const handlePizzaClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']});
  }

  const handleClick = () => {
    console.log(game.player.name);
    setGame({
      ...game,
      player: {...game.player, name: "Bob"}
    })
  }

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // <NavBar cartItemsCount={cartItems.length}/>
  //     <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => {}} color="primary">My Button</Button>
      <Like onClick={() => console.log("clicked!")}/>
      <Button onClick={handleClick}>Clear Username</Button>
      <Button onClick={handlePizzaClick}>Add Cheese to Pizza</Button>
      <Button onClick={handleCartClick}>Add 1 to Product 1's Quantity</Button>
    </div>
  );
}

export default App;
