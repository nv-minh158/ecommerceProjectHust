const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.header('token')
    try {
        const decode = jwt.verify(token, "tratra")
        if(decode){
            req.user = decode
            next()
        }else{
            res.status(401).send({message: "Vui lòng đăng nhập"})
        }
    } catch (error) {
        res.status(401).send({message: "Vui lòng đăng nhập"})
    }
}
module.exports = authenticate