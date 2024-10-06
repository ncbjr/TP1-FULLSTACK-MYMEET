const { response } = require("express");
const userService = require('../services/UserService')
const jwt = require('jsonwebtoken');

class UserController {
    async index(request, response){
        try {
            const users = await userService.getAllUsers();
            response.status(200).json(users);
        }
        catch (error){
            response.status(500).json({message: error})
        }
    }
    async show(){

    }
    async store(request, response){
        try{
            const { name, email, password } = request.body;
            const user = await userService.createUser({ name, email, password });
            response.status(201).json(user);
        }
        catch (error){
            response.status(400).json({message: error.message})
        }

    }
    async update(){

    }
    async delete(){

    }
    async login(request, response){
        try{
            const {email, password} = request.body;
            const user = await userService.authenticateUser(email, password);
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
              
            // Enviar o token no cabeçalho da resposta
            //response.set('Authorization', `Bearer ${token}`);
            response.cookie('token', token, {
                sameSite: 'none',
                httpOnly: false
            })
            response.status(200).json(`Bearer ${token}`);
        }
        catch (error){
            response.status(401).json({message: error.message})
        }
    }
}

//Singleton

module.exports = new UserController();