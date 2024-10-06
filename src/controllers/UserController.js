const { response } = require("express");
const userService = require('../services/UserService')

class UserController {
    async index(request, responde){
        try {
            const users = await userService.getAllUsers();
            response.status(200).json(users);
        }
        catch (error){
            response.status(500).json({message: encodeURIComponent.message})

        }

    }
    async show(){

    }
    async store(){

    }
    async update(){

    }
    async delete(){

    }

}

//Singleton

module.exports = use.UserController();