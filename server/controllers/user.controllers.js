const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password, numberPhone, address, type } = req.body;

  try {
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const checkExist = await User.findOne({
      where: {
        email,
      },
    });
    if (checkExist) {
      res.send({ success: false, message: "Email đã tồn tại" });
    } else {
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        numberPhone,
        address,
        type: type ? type : "CLIENT",
      });
      res.status(201).send({ success: true, newUser });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign({ email: user.email, type: user.type }, "tratra", {
        expiresIn: 60 * 60,
      });
      res
        .status(200)
        .send({ suceess: true, message: "Đăng nhập thành công", token });
    } else {
      res.send({
        success: false,
        message: "Tài khoản hoặc mật khẩu không đúng",
      });
    }
  } else {
    res.send({ success: false, message: "Không tìm thấy email" });
  }
};
module.exports = { register, login };
