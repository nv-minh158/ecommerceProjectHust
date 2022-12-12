const authorize = (userType) => ((req, res, next) => {
    const {user} = req
    if (user.type === userType){
        next()
    }else{
        res.status(401).send({message:"Bạn không có quyền truy cập"})
    }
})
module.exports = authorize
