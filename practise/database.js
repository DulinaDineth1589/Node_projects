require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI; // Get MongoDB URI from .env

if (!mongoURI) {
    console.error("❌ MONGO_URI is not defined. Check your .env file.");
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Atlas Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));
