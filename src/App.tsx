import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  let items = ["New York", "San Fransico", "London", "Paris"];
  const [cartItems, setCartItems] = useState(["Product1","Product2"])


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
    </div>
  );
}

export default App;
