import { useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'

interface LikeProps {
    onClick: () => void;
}

const Like = ( { onClick }:LikeProps ) => {
    const [likeFill, setLikeFill] = useState(false);

    const toggleLike = () => {
        setLikeFill(!likeFill);
        onClick();
    }

    if (likeFill) return <AiFillLike color="#ff6b81" size={20} onClick={toggleLike}/>
    return <AiOutlineLike size={20} onClick={toggleLike}/>

}

export default Like