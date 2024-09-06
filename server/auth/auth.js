// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  jwt.verify(token, process.env.SECREAT_KEY, (err, decoded) => {
    if (err) return res.status(401).send('Unauthorized');
    req.userId = decoded.userId;
    console.log(req.userId,"dsfjsldkjf")
    next();
  });
  };
  
export default authMiddleware;
