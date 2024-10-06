const User = require('../models/UserModel');

class UserRepository {
    async getAllUsers(){
        return await User.find()
    }

    async getUserByID(id){
        return await User.findOne(id)
    }
    
    async getUserByEmail(email){
        return await User.findOne({ email: email });
    }
    
    async createUser(userData){
        const user = new User(userData);
        return await user.save()
    }
    //update e Delete
}


//sinlge
module.exports = new UserRepository();