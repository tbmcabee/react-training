import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { produce } from "immer";
import GameList from "./components/GameList";

function App() {
  let items = ["New York", "San Fransico", "London", "Paris"];
  const [cartItems, setCartItems] = useState(["Product1","Product2"])

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Tallon"
    }
  });

  const handleClick = () => {
    console.log(game.player.name);
    setGame({
      ...game,
      player: {...game.player, name: "N/A"}
    })
  }

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => {}} color="primary">My Button</Button>
      <Like onClick={() => console.log("clicked!")}/>
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
      <GameList gameList={game} />
      <Button onClick={handleClick}>Clear Username</Button>
    </div>
  );
}

export default App;
