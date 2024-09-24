const User = require('../services/users.services.js');

const CreateUser = async (req, res) => {
    try {
        const { user_email, user_password } = req.body;
        const { success, message } = await User.Create(user_email, user_password);
        res.status(success ? 201 : 400).json({ success: success, message: message });
    } catch (error) {
        res.status(500).json(error); 
    }
}

const GetUser = async (req, res) => {
    try {
        const user_email = req.params.user_email;
        const result = await User.Get(user_email);
        res.status(result.success ? 201 : 400).json(result.success ? { success: success, user: user } : { success: success });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    CreateUser,
    GetUser
}