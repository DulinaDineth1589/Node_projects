require('dotenv').config();
require('./database');
const express = require('express');
const User = require('./userModel');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// ✅ **GET all users** (http://localhost:3000/users)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Fetch users from MongoDB
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// ✅ **POST a new user** (http://localhost:3000/users)
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ message: 'User added', user: newUser });
    } catch (err) {
        res.status(500).json({ error: 'Error adding user' });
    }
});

// ✅ Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
