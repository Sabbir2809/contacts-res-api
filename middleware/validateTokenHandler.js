const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
      token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.PRIVATE_KEY, (error, decoded) => {
        if (error) {
          res.status(401).json({ message: 'User is not authorization' });
        }
        req.user = decoded.user;
        next();
      });
      if (!token) {
        res.status(401).json({ message: 'User is not authorized or token is missing' });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = validateToken;
