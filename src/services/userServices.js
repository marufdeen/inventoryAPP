const userEntity = require("../entities/userEntity");
const userDao = require("../data-access/userDao");
const { comparePassword } = require("../helpers/password");
const createToken = require("../helpers/createToken");

class userService {
  static async register(userData) {
    try {
      // make a new user object with inputed data
      const user = await new userEntity(userData).execute();
      if (user.details) throw new Error(user.details[0].message);
      // check if the user already exists
      const emailExist = await userDao.findByEmail(user.getEmail());
      if (emailExist) throw new Error("Email already exist");

      // if user does not exist, create the user
      const userCreated = await userDao.create({
        fullName: user.getfullName(),
        email: user.getEmail(),
        password: user.getPassword()
      });
      // if user failed to create, throw error
      if (!userCreated) throw new Error("User not Created");

      const token = await createToken(userCreated);
      return { userCreated, token };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async login(userData) {
    try {
      // make a new user entity and validate the inputed details
      const user = await new userEntity(userData).validateLogin();
      if (user.details) return { error: user.details[0].message };

      const userExist = await userDao.findByEmail(user.getEmail()); // check if the user is registered
      if (!userExist) throw new Error("user does not exist");
      await comparePassword(user.getPassword(), userExist.password);

      // generate token for the logged user
      const token = await createToken(userExist);
      return { sucess: "Login Successful", token };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async editUser(userId, userData) {
    try {
      const userExist = await userDao.findById(userId);
      if (userExist) {
        const user = await new userEntity(userData).validateEdit();
        if (user.details) return { error: user.details[0].message };
  
        const emailExist = await userDao.findByEmail(user.getEmail()); // check if the email exist
  
        if ( emailExist !== null && emailExist.email.length > 0 && emailExist.id !== userId) throw new Error("user with this email already exist");
  
        const editedUser = await userDao.update(userId, userData);
        if (editedUser) {
        return { message: "Profile updated successfully", editedUser };
        } else {
          return { message: "Not updated" };
        }
        
      } else {
        return 'Not an authenticated user';
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
 
  static async setUserStatus(signInId, userId, userData) {
    try {
      const user = await userDao.findById(signInId);
      if (user.role == 'admin' && signInId !== userId) {
        const userFound = await userDao.findById(userId);
        if (userFound) {
          const userStatus = await userDao.update(userId, userData);
          return { message: "User", userStatus };
        } else {
          return "Sorry, user not found!";
        }
      }
      if (user.role == 'admin' && signInId == userId) {
        return "Sorry, You can't enable or disable yourself";
      } else {
        return "Sorry, only admins can access this page";
      }
    } catch (error) {}
  }

  static async getAllUsers(signInId) {
    try {
      const user = await userDao.findById(signInId);
      if (user.role == 'admin') {
        const usersFound = await userDao.findAll();
        return { message: "success", usersFound };
      } else {
        return "Sorry, only admins can access this page";
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getSingleUser(signInId, userId) {
    try {
      const user = await userDao.findById(signInId);
      if (user.role == 'admin') {
        const userFound = await userDao.findById(userId);
        if (userFound) {
          return { message: "success", userFound };
        } else {
          return "Sorry, user not found!";
        }
      } else {
        return "Sorry, only admins can access this page";
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteUser(signInId, userId) {
    try {
      const user = await userDao.findById(signInId);
      if (user.role == 'admin' && signInId !== userId) {
        const userFound = await userDao.findById(userId);
        if (userFound) {
          await userDao.remove(userId);
          return " User successfully deleted!";
        } else {
          return "Sorry, user not found!";
        }
      }
      if (user.role == 'admin' && signInId == userId) {
        return "Sorry, You can't delete yourself";
      } else {
        return "Sorry, only admins can access this page";
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = userService;
