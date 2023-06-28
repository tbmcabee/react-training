import { useState } from 'react';

interface ExpandProps {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars=100 }: ExpandProps) => {
  const [buttonState, changeState] = useState(false);
  const text = buttonState ? children : children.substring(0, maxChars);

  const handleClick = () => {
        changeState(!buttonState);
  }

  if (children.length <= maxChars) return <p>{children}</p>

  return <p>{text}...<button onClick={handleClick}>{buttonState ? 'Less' : 'More'}</button></p>
}

export default ExpandableText