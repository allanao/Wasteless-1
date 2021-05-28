import React, { useState, useEffect } from 'react';
import LikedItem from './LikedItem';

function LikedList(props) {
    //initial value goes into useState
    const [likedItems, setLikedItems] = useState([]);

    console.log('likedItems: ', likedItems);

  useEffect(() => {
      // Response: An array who have --> preference: liked
    fetch(('/api/liked'))
      .then((items) => {
          const data = items.json();
          return data;
      })
      .then((data) => {
        //   const returnedItems = data.body.likedItems;]
        // console.log(data);
          const returnedItems = data.likedItems;
          setLikedItems(returnedItems);
      })
  }, []);
  
  const likedListArray = [];

  for (let i = 0; i < likedItems.length; i++) {
      likedListArray.push(
          <LikedItem 
            itemName={likedItems[i]}
            key={i}
            id={i + 1}
            foodId={likedItems[i]}
            setState={setLikedItems}
        />
      )
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