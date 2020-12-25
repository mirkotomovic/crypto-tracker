import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      res
        .status(401)
        .json({ message: 'No authorization token, authorization denied!' });
    } else {
      const verified = jwt.verify(token, process.env.JWT_SECRET);

      if (!verified) {
        res
          .status(401)
          .json({ msg: 'Token verification failed, authorization denied!' });
      } else {
        req.user = verified.id;
        next();
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
