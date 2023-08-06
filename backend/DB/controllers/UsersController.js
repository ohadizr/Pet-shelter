const sha256 = require("js-sha256");
const jwt = require("jsonwebtoken");
const UsersDAO = require("../models/UsersDAO");
const PetsDao = require("../models/PetsDAO");
const {
  RegisterValidation,
  LoginValidation,
} = require("../validations/UsersValidations");
const { ObjectId } = require("mongodb");
module.exports = class UsersController {
  static async SignUp(req, res) {
    try {
      const validRequest = RegisterValidation(req.body);
      if (!validRequest) {
        return res.status(400).json({
          success: false,
          message: "Please fill all fields",
        });
      }

      const userObject = req.body;

      const existingUser = await UsersDAO.getUserByEmail(userObject.email);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Please select a different username",
        });
      }

      userObject.password = sha256(userObject.password);

      await UsersDAO.createUser(userObject);

      return res.json(req.body);
    } catch (e) {
      console.log(`Error in UsersController.Register ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }

  static async Login(req, res) {
    try {
      const validRequest = LoginValidation(req.body);
      if (!validRequest) {
        return res.status(400).json({
          success: false,
          message: "Please fill all fields",
        });
      }

      const user = await UsersDAO.getUserByEmail(req.body.email);
      if (!user || user.password != sha256(req.body.password)) {
        return res.status(400).json({
          success: false,
          message: "Wrong username or password",
        });
      }

      const accessToken = jwt.sign(
        {
          email: user.email,
          password: user.password,
        },
        process.env.ACCESS_TOKEN_SECRET
      );

      return res.json({
        token: accessToken,
        user: {
          _id: new ObjectId(user._id),
        },
      });
    } catch (e) {
      console.log(`Error in UsersController.Login ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }


  static async GetUserById(req, res) {
    try {
      const id = req.params.id;
      const user = await UsersDAO.getUserById(id);

      if (user) {
        res.json({
          f_name: user.f_name,
          l_name: user.l_name,
          email: user.email,
          phone: user.phone,
          id:id,
        });
      } else {
        res.status(404).send("User not found");
      }
    } catch (e) {
      console.log(" user by id test")
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async GetAllUsers(req, res) {
    try {
      const users = await UsersDAO.getAllUsers();
      res.json(users);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async UpdateUser(req, res) {
    try {
      const userId = req.params.id;
      const user = await UsersDAO.getUserById(userId);
      if (user) {
        const updatedData = req.body;
        const updatedList = [];

        if (updatedData.f_name) {
          user.f_name = updatedData.f_name;
          updatedList.push("f_name");
        }
        if (updatedData.l_name) {
          user.l_name = updatedData.l_name;
          updatedList.push("l_name");
        }
        if (updatedData.email) {
          user.email = updatedData.email;
          updatedList.push("email");
        }
        if (updatedData.password) {
          user.password = updatedData.password;
          updatedList.push("password");
        }

        await UsersDAO.createUser("63ff7e50d1f3efdf2770f526", user);
        res.json({
          success: true,
          message:
            "user updated successfully , new values for " + updatedList.join,
        });
      } else {
        res.status(404).send("User not found");
      }
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async getPetInfoByUserId(req, res) {
    try {
      const userId = req.params.id;
      const user = await UsersDAO.getUserById(userId);
      if (user) {
        const pet = await PetsDao.getPetById(petId);
        res.json(pet);
      } else {
        res.status(404).send("User not found");
      }
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async GetUserFull(req, res) {
    try {
        const id = req.params.id;
        const user = await UsersDAO.getUserById(id);
        if (user) {
            res.json({
            status: 200,
            f_name: user.f_name,
            l_name: user.l_name,
            email: user.email,
            pets: user.pets,
            });
        } else {
            res.status(404).send("User not found");
        }
        }
        catch (e) {
        console.log(`Error in ${e}`);
        return res.status(500).json({
            success: false,
            message: "unknown error",
        });
        }
    }

};


