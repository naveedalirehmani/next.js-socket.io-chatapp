const Router = require('express')
const router = new Router();
const User = require('../../models/User')
const registrationValidation = require('../../validation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authVarification = require('../../authentication/jwt')

router.post("/register",async (request, response) => {    
    const { userName, email, password } = request.body;
    
    const error = registrationValidation({ userName, email, password });
    if(error) return response.status(400).send(error.details[0].message);
    
    const emailExist = await User.findOne({ email });
    if(emailExist) return response.status(400).send("Email already exist");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('hashedPassword', hashedPassword);

    const user = new User({ userName, email, password:hashedPassword });

    try {
        const newUser = await user.save();
        const token = jwt.sign({_id:newUser._id},process.env.TOKEN_SECRET)
        response.header('auth-token',token).send({token}).status(200)
    } catch (error) {
        response.status(400).send(error);
    }

});

router.post("/login", async (request, response) => {

    const { email, password } = request.body;
    console.log('email', email, 'password', password);
    const user = await User.findOne({ email }); 
    if(!user) return response.status(400).send("Email or password is incorrect");

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return response.status(400).send("Email or password is incorrect");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    response.header("auth-token", token).send({token}).status(200)

})


router.get('/getuser',authVarification,async (request,response)=>{
    const user = await User.findOne({_id:request.user["_id"]})
    if(user) return response.status(200).json({user})
    response.status(200).json('user was not found')
})

module.exports =router;