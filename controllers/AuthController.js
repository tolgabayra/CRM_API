const jwt = require("jsonwebtoken")
const User = require("../models/User")
const crypto = require("crypto")



const register = async (req, res) => {
  const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }

}



const login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(401).json({ message: "Email is not found !!!" })
    }
    const dbPassword2 = crypto.createHash('sha256').update(password).digest('base64');
    
    console.log(user);
    console.log(dbPassword2);


    if (user.password === dbPassword2) {
      const accessToken = jwt.sign({ email }, process.enc.JWT_SECRET_KEY, { expiresIn: "1d" })
      const refreshToken = jwt.sign({ email }, process.enc.JWT_SECRET_KEY)
      res.cookie('access_token', accessToken, {
        origin: '*',
        httpOnly: true
      })
      res.cookie('refresh_token', refreshToken, {
        origin: '*',
        httpOnly: true
      })
      res.status(200).json({ message: "Login is Successful..." })
    }else{
      res.status(401).json("Password is wrong...")
    }
  } catch (err) {
    res.status(500).json(err.stack)
  }
}

const logout = (req,res) => {
  res.clearCookie('access_token');
  res.clearCookie('refresh_token');
  res.status(200).json('Logout success')}





module.exports = {
  login,
  register,
  logout
}