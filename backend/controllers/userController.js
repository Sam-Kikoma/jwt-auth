// @desc Auth user & get token
// @route POST /api/users/auth
// @access Public
import asyncHandler from "express-async-handler";

const authUser = (req, res) => {
	res.json({ message: "Success" });
};

export { authUser };
