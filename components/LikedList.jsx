import React, { useState, useEffect } from 'react';
import LikedItem from './LikedItem';

function LikedList(props) {
    //initial value goes into useState
    const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
      // Response: An array who have --> preference: liked
    fetch(('/api/liked'))
      .then((items) => {
          const data = items.json();
          return data;
      })
      .then((data) => {
          const returnedItems = []; // the whole item object
          for (const el of data) {
              returnedItems.push(el);
          }
          setLikedItems(returnedItems);
      })
  }, []);
  
  const likedListArray = [];

  for (let i = 0; i < likedItems.length; i++) {
      likeListArra.push()
          <LikedItem 
            itemName={likedItems[i]}
            key={i}
            id={i + 1}
            foodId={likedItems[i]}
            setState={setLikedItems}
        />
      ;
  }

  return (
    <div className="list">
        <h3>Liked List</h3>
        <div>
          {likedListArray}
        </div>
    </div>
  );
};

export default LikedList;