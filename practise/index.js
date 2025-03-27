require('./database');
const User = require('./userModel');

const addUser = async () => {
    const newUser = new User({ name: 'Alice', age: 25, email: 'alice@example.com' });

    await newUser.save();
    console.log('✅ User added:', newUser);
};

addUser();
