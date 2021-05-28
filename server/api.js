const express = require('express');

const FoodController = require('./FoodController');
const UserController = require('./userControllers');

const router = express.Router();

// Create user in database
router.post('/signup', UserController.createUser, (req, res) => {
	res.status(200).json({ message: 'user is created' });
});

// create login user in database
router.post('/login', UserController.verifyUser, (req, res) => {
	res.status(200).json({ loggedIn: res.locals.isUserVerified });
});

// get all food
router.get('/', FoodController.getFood, (req, res) => {
	// sends data to frontend
	res.status(200).json(res.locals.food);
	// console.log(res.locals.food);
});

// create/add food
router.post('/food', FoodController.addFood, (req, res) =>
	res.status(200).json(res.locals.food)
);

// delete food
router.delete('/food/:item', FoodController.deleteFood, (req, res) =>
	res.status(200).json({ message: 'delete hit' })
);

// update item name with user input
router.put('/food/:item', FoodController.updateFoodName, (req, res) => {
	console.log('HIT from updateFoodName next()');
	res.status(200).json({ message: 'updated name' });
});

// update status to purchased
router.put(
	'/food/purchased/:item',
	FoodController.updateFoodStatus,
	(req, res) => res.status(200).json({ message: 'updated status to purchased' })
);


// PURCHASED LIST
// get all purchased items
router.get('/purchased', FoodController.getPurchasedFood, (req, res) => {
	res.status(200).json(res.locals.purchased);
});

// update outcome to eaten
router.put('/food/eaten/:item', FoodController.updateEaten, (req, res) =>
	res.status(200).json({ message: 'updated outcome to eaten' })
);

// EATEN LIST
// get all eaten items
router.get('/eaten', FoodController.getEatenFood, (req, res) => {
	res.status(200).json(res.locals.eaten);
});

// update preference to liked
router.put('/food/eaten/liked/:item', FoodController.updateLiked, (req, res) =>
	res.status(200).json({ message: 'updated preference to liked' })
);

// LIKED LIST
// get all liked items
router.get('/liked', FoodController.getLikedFood, (req, res) => {
<<<<<<< HEAD
	res.status(200).json(res.locals.liked);
=======
  res.status(200).json({likedItems: res.locals.liked});
>>>>>>> 365e43cfad10a52347e7b6801e4117309eab038a
});

// update preference to disliked
router.put(
	'/food/eaten/disliked/:item',
	FoodController.updateDisliked,
	(req, res) =>
		res.status(200).json({ message: 'updated preference to disliked' })
);

// get all disliked items
router.get('/disliked', FoodController.getDislikedFood, (req, res) => {
	res.status(200).json(res.locals.eaten);
});

// update outcome to disposed
router.put('/food/disposed/:item', FoodController.updateDisposed, (req, res) =>
	res.status(200).json({ message: 'updated outcome to disposed' })
);

// DISPOSED LIST
// get all disposed items
router.get('/disposed', FoodController.getDisposedFood, (req, res) => {
	res.status(200).json(res.locals.disposed);
});

module.exports = router;
