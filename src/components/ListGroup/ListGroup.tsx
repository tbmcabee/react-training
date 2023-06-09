import { useState } from "react";
import "./ListGroup.css";

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// interface ListItemProps {
//   active: boolean;
// }

// const ListItem = styled.li<ListItemProps>`
//   padding: 5px 0;
//   background: ${(props) => (props.active ? "blue" : "none")};
// `;

//{ item: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

//in order to use props you need to feed it into the function
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //No for loops in JS, so we
  //let = variable
  //-1 in TSX means no items selected, NOT last item
  const [selectedIndex, setSelectedIndex] = useState(0); //state hook!

  //Need to specify event parameters rather then only "event"
  //Event handler

  //Cannot use an expression in the middle of an JSX markup, can only use html elements or react components
  //need to wrap expression in braces
  return (
    //Use Fragment instead of wrapping in another element, as it will simply the code rather then adding another element to the html stack
    //To use fragments without importing library just use empty angle brackets like below, react will read it as a fragment

    //when rendering a list of items, react needs a key for each item so it can track the item properly
    //for now we can just use the item itself, put most apis have an id method

    //when getting data from props you need to prefix the variable or method with props., since it is essentially an object
    //unless you deconstruct the props object above
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group" style={{ backgroundColor: "yellow" }}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
