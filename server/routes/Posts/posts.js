const Router = require('express')
const router = new Router();
const authVarification = require('../../authentication/jwt')

router.get('/post',authVarification, (request, response) => {
    console.log(request.user["_id"],"herer")
    response.status(200).json({authentication:'authentication is working Congrates'});
})

module.exports = router;