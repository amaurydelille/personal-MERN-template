const connectToDatabase = require('../config/mongodb.js');
const bcrypt = require('bcrypt');
const getFormattedDate = require('./date.services.js');
const USER = process.env.USER;

const Create = async (user_email, user_password) => {
    try {
        const db = await connectToDatabase();
        const hashed_password = bcrypt(user_password, 10);
        const date = getFormattedDate();
        const existing_user = await db.collection(USER).findOne({ user_email: user_email });
        if (existing_user) {
            return { success: false, message: 'Account already registered.' }
        } else {
            await db.collection(USER).insertOne({ 
                user_email: user_email,
                password: hashed_password, 
                plan : 'no',
                creation_date: date 
            });
            return { succes: true, message: 'Account successfully registered.' } 
        }
    } catch (error) {
        return { success: false, message: error }
    }
}

const Get = async (user_email) => {
    try {
        const db = await connectToDatabase();
        const user = await db.collection(USER).findOne({ user_email: user_email });
        if (user) {
            return { success: true, user: user }
        } else {
            return { success: false }
        }
    } catch (error) {
        return { success: false, message: error }
    }
}

module.exports = {
    Create, 
    Get
}