//@Description: register a user
//@Route: POST - api/users/register
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

//@Access: public
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All Fields are Mandatory!' });
    }
    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
      return res.status(400).json({ message: 'User Already Register' });
    }
    // hash
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400).json({ message: 'User data us not valid' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@Description: login user
//@Route: POST - api/users/login
//@Access: public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All Fields are Mandatory!' });
    }
    const user = await userModel.findOne({ email });
    // console.log(user);
    // compare user password , hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.PRIVATE_KEY,
        { expiresIn: '1h' }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401).json({ message: 'Email or Password is not Valid' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@Description: current user
//@Route: POST - api/users/current
//@Access: private
const currentUser = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports = { registerUser, loginUser, currentUser };
