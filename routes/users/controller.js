module.exports = {
	apply: async (req, res, next) => {
		try {
			let createdUser = {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				dob: req.body.dob,
			}
			console.log(createdUser);
			res.json({
				payload: createdUser,
			});
		} catch (e) {
			res.status(500).json({
				message: e.message,
			});
		}
	},
};
