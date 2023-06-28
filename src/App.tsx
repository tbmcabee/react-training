import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur, explicabo tempora quas animi, reprehenderit accusamus consequuntur libero aperiam porro tempore 
        labore quaerat ipsum maxime pariatur temporibus saepe blanditiis? Dolorem voluptate dolores qui corrupti veniam aliquid fugit veritatis. 
        Accusamus est eligendi et perspiciatis, veniam nihil! In quos, eius consequatur quaerat assumenda soluta architecto laboriosam. Delectus quas facere, 
        aliquid natus facilis obcaecati eius accusantium enim ducimus voluptate, saepe tenetur accusamus officia nulla. Cum animi dolores quisquam doloribus, hic corrupti facilis 
        neque quis inventore assumenda vero quos, nemo ab magnam tempore aliquam fuga corporis similique optio ipsa illo accusamus? Commodi, doloribus delectus?
      </ExpandableText>
    </div>
  );
}

export default App;
