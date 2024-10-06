const UserRepository = require('../repositories/UserRepository')

class UserService{
    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }
    async getUserByID(id){
        return await UserRepository.getUserByID(id);
    }

    async getUserByEmail(email){
        return await UserRepository.getUserByEmail(email);
    }

    async createUser(userData) {
        const existUser = await UserRepository.getUserByEmail(userData.email);
        if (existUser) {
            throw new Error('Usuário já existe!');
        }
        return await UserRepository.createUser(userData);
    }
    async authenticateUser(email, password){
        const user = await UserRepository.getUserByEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }
        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) {
            throw new Error('Senha inválida!');
        }
        return user;
    }
}

module.exports = new UserService();