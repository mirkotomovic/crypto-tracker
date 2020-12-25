import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  const { email, password, passwordCheck, displayName } = req.body;

  try {
    if (!email || !password || !passwordCheck) {
      res.status(400).json({ message: 'Not all fields have been entered!' });
    } else if (password.length < 8) {
      res.status(400).json({ message: 'Password is too short!' });
    } else if (password !== passwordCheck) {
      res.status(400).json({ message: 'Password did not match!' });
    }

    const count = await User.countDocuments({ email: email });
    if (count > 0) {
      res.status(400).json({ message: 'User with this email already exists!' });
    } else {
      const saltRounds = 12;
      const hash = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        email: email,
        password: hash,
        displayName: displayName ? displayName : email,
      });

      newUser.save((err, user) => {
        if (err) {
          console.error({ err });
        } else {
          res
            .status(201)
            .json({ message: 'User added successfully!', user: user });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: 'Not all fields have been entered!' });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      res
        .status(400)
        .json({ message: 'User with this email does not exists!' });
    } else {
      const result = await bcrypt.compare(password, user.password);

      if (result) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
          token,
          user: {
            id: user._id,
            displayName: user.displayName,
            email: user.email,
          },
        });
      } else {
        res.status(401).json({ message: 'Incorrect credentials!' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.status(200).json({ message: 'User deleted!', user: deletedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const isTokenValid = async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      res.json(false);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      res.json(false);
    }

    const user = await User.findById(verified.id);
    if (!user) {
      res.json(false);
    }

    res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
