const UserRepository = require('../repositories/UserRepository')

class UserService{
    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }
    async getUserByID(id){
        return await UserRepository.getUserByID(id);
    }
    async createUser(userData) {
        const existUser = await UserRepository.getUserByID(userData.id);
        if (existUser) {
            throw new Error('Usuário já existe!');
        }

        return await UserRepository.createUser(userData);
    }
}

module.exports = new UserService();