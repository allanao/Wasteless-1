const models = require('./FoodModel');
const UserController = {};

UserController.createUser = (req, res, next) => {
	const { username } = req.body;
	const { password } = req.body;

	models.User.create({
		username,
		password,
	})
		.then((res) => {
			console.log('Response for user.create:', res);
			return next();
		})
		.catch((err) => {
			return next({
				log: `UserController.createUser: Error: create failed: ${err}`,
				message: {
					err: 'Error occurred in UserController.createUser. Check server logs for details.',
				},
			});
		});
};

UserController.verifyUser = (req, res, next) => {
	const { username } = req.body;
	const { password } = req.body;

	models.User.find({
		username,
		password,
	})
		.then((users) => {
			if (users.length === 0) {
				res.locals.isUserVerified = false;
			} else {
				res.locals.isUserVerified = true;
			}

			console.log('Response for user.find:', users);
			return next();
		})
		.catch((err) => {
			return next({
				log: `UserController.verifyUser: Error: create failed: ${err}`,
				message: {
					err: 'Error occurred in UserController.verifyUser. Check server logs for details.',
				},
			});
		});
};

module.exports = UserController;
