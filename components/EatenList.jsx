import React, { useState, useEffect } from 'react';
import EatenItem from './EatenItem';

function EatenList(props) {
  console.log('Props in EatenList: ', props);
  const [currState, setState] = useState(props.state);

  
  useEffect(() => {
    console.log('')
    fetch('/api/eaten')
      .then((items) => {
        const data = items.json();
        return data;
      })
      .then((data) => {
        const returnedItems = [];
        const returnedItemNames = [];
        for (const el of data) {
          returnedItems.push(el);
          returnedItemNames.push(el.item);
        }

        setState({
          ...currState,
          listOfEatenItems: returnedItems,
          listOfEatenItemNames: returnedItemNames,
        })
      });
  }, []);


  function updateLiked(itemName) {
    console.log('liked!');
    fetch(`/api/food/eaten/liked/${itemName}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ item: itemName }),
    }).catch((err) => {
      console.log(err);
    });

    setState((prevState) => {
      const itemNamesSlice = prevState.listOfLikedItemNames?.slice();
      console.log('itemNames', itemNamesSlice);
        const filtered = itemNamesSlice?.filter((value) => value !== itemName);
        console.log('filtered', filtered);
        console.log('list of liked items', currState.listOfLikedItemNames);
        console.log('prevState', prevState);

        return { ...prevState, listOfLikedItemNames: filtered };
    });
  }

  function updateDisliked(itemName) {
      fetch(`/api/food/eaten/disliked/${itemName}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify({ item: itemName }),
      }).catch((err) => {
        console.log(err);
      });
  
      setState((prevState) => {
        const itemNamesSlice = prevState.listOfDislikedItemNames?.slice();
  
        const filtered = itemNamesSlice?.filter((value) => value !== itemName);
  
        return { ...prevState, listOfDislikedItemNames: filtered };
      });

    }
    
    
  const eatenListArray = [];
  for (let i = 0; i < currState?.listOfEatenItemNames.length; i++) {
    eatenListArray.push(
      <EatenItem
        itemName={currState?.listOfEatenItemNames[i]}
        key={i}
        id={i + 1}
        foodId={currState?.listOfEatenItemNames[i]}
        setState={setState}
        updateLiked={updateLiked}
        updateDisliked={updateDisliked}
        // need checkLikedStatus
      />
    );
  }

  return (
    <div className="list">
      <h3>Eaten List</h3>
      <div>
        {eatenListArray}
      </div>
    </div>
  );
}

export default EatenList;
