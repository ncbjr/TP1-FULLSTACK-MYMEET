const UserRepository = require('../repositories/UserRepository')

class userService{
    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }
    async getUserByID(id){
        return await UserRepository.getUserByID(ID);
    }
    async createUser(userData) {
        const existUser
    }
}