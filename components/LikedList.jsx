import React, { useState, useEffect } from 'react';
import LikedItem from './LikedItem';

function LikedList(props) {
    const [currState, setState] = useState(props.state);

    useEffect(() => {
        fetch(('/api/liked'))
    })

    return (

    )
}

export default LikedList;