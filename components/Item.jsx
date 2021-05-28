import React, { useState } from 'react';

function Item(props) {
	// initial state and respective values
	const [isEditMode, setIsEditMode] = useState(false);
	const [input, setInput] = useState(props.itemName);

	const handleEditClick = () => {
		setIsEditMode((prev) => !prev);
	};

	const handleInputChange = (e) => {
		// console.log(e.target.value);
		// (e.target.value);
		setInput(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleEditClick();
			props.onItemChange(props.id, input);
		}
	};

	const spanValue = isEditMode ? (
		<input
			className="updateText"
			onChange={handleInputChange}
			onKeyDown={handleKeyDown}
			value={input}
		/>
	) : (
		props.itemName
	);

	return (
		<div className='ItemComponent'>
			<span className='items'>
				{props.id + 1}. {spanValue}
			</span>{' '}
			<div className='toBuyListBtnContainer'>
				{/* bought button */}
				<button
					className='toBuyListBtn'
					id='deleteBtn'
					onClick={() => {
						props.updateItemStatus(props.itemName);
					}}
				>
					{' '}
					<i className='fa fa-check' />{' '}
				</button>

				{/* edit button */}
				<button className='toBuyListBtn' onClick={handleEditClick}>
					{' '}
					<i className='fa fa-edit' />{' '}
				</button>

				{/* eraser button */}
				<button
					className='toBuyListBtn'
					id='eraserBtn'
					onClick={() => {
						props.deleteItem(props.itemName);
					}}
				>
					{' '}
					<i className='fa fa-ban' />{' '}
				</button>
			</div>
		</div>
	);
}

export default Item;
