import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";

// import Alert from "./components/Alert";
// import Button from "./components/Button";

function App() {
  //const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Fransico", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //old div <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>

  // {alertVisible && (
  //   <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
  // )}
  // <Button onClick={() => setAlertVisibility(true)}>Test Button</Button>
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => {}}>My Button</Button>
    </div>
  );
}

export default App;
