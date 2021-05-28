import React from 'react';

const LikedItem = (props) => {
  return (
      <div className="ItemComponent">
        <span className="items">
          {props.itemName}
        </span>
      </div>
  );
}

export default LikedItem;