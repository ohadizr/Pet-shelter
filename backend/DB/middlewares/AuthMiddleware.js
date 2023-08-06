const jwt = require('jsonwebtoken');
const UsersDAO = require('../models/UsersDAO')

module.exports.AuthMiddleware = async function AuthMiddleware(req, res, next) {

    try {
        let token = req.headers['authorization'];
        if (!token) {
            console.log('No token found')
            return res.status(401).send(); 
        }

        const justToken = token.slice(7);


        const tokenData = jwt.verify(justToken, process.env.ACCESS_TOKEN_SECRET)
  
        if (!tokenData) {
            console.log('Token data not found')
            return res.status(401).send();
        }
        const userData = await UsersDAO.getUserByEmail(tokenData.email);
        if (!userData) {
            console.log('User data not found')
            return res.status(401).send();
        }

        req.currentUser = userData;
        next();
    } catch (e) {
        console.log(e);
        return res.status(500).send();
    }
}