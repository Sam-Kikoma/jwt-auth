import asyncHandler from "express-async-handler";

// @desc Auth user & get token
// @route POST /api/users/auth
// @access Public
const authUser = (req, res) => {
	res.json({ message: "Success" });
};

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
	res.json({ message: "Registered user" });
};

// @desc Logout user
// @route POST /api/logout
// @access Public
const logoutUser = (req, res) => {
	res.json({ message: "Logout user" });
};

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = (req, res) => {
	res.json({ message: "User Profile" });
};

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = (req, res) => {
	res.json({ message: "Updated user profile" });
};

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };
