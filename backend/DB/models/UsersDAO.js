const { ObjectId } = require("mongodb");

let collection;


module.exports = class UsersDAO {
  static async injectDB(connection) {
    if (!connection) return;
    try {
      collection = await connection.collection("users");
    } catch (e) {
      console.log(`Could not establish connection to users collection ${e}`);
    }
  }
  

  static async createUser(userData) {
    userData.created_at = new Date();
    userData.login_attempts = 0;
    await collection.insertOne({ ...userData });
  }

  static async getUserByUsername(updatedUser) {
    return await collection.findOne({ updatedUser });
  }

  static async updateUser(userId, updatedValues) {
    await collection.updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
           f_name: updatedValues.f_name ,
           l_name: updatedValues.l_name ,
           email: updatedValues.email,
           password: updatedValues.password,
           id: updatedValues.id,

      }
      }
    );
  }
  static async updateUsers(users) {
    await collection.updateMany({}, { $set: users });
  }

  static async getUserById(_id) {
    return await collection.findOne({ _id: new ObjectId(_id) });
  }

  static async getUserByEmail(email) {
    return await collection.findOne({ email });
  }
  static async getAllUsers() {
    return await collection.find({}).toArray();
  }
};
