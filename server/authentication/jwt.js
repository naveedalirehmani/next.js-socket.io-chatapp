// const jwt = require("jsonwebtoken");
// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken')

 const authVarification = function (request, response, next) {
    console.log('here in post authentication')
    const authHeader = request.header("auth-token");

    if (!authHeader) return response.status(401).send("Access denied. No token provided");

    jwt.verify(authHeader, process.env.TOKEN_SECRET, (error, Varified) => {
        if (error) return response.status(403).send("Access denied. Invalid token");
        request.user = Varified;
        next();
    });

}

module.exports = authVarification