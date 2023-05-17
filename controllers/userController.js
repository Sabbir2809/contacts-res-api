//@Description: register a user
//@Route: POST - api/users/register
//@Access: public
const registerUser = async (req, res) => {
  res.status(200).json({ message: 'Registration' });
};

//@Description: login user
//@Route: POST - api/users/login
//@Access: public
const loginUser = async (req, res) => {
  res.status(200).json({ message: 'Login' });
};

//@Description: current user
//@Route: POST - api/users/current
//@Access: private
const currentUser = async (req, res) => {
  res.status(200).json({ message: 'Current' });
};

module.exports = { registerUser, loginUser, currentUser };
