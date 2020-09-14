const User = require('../models/user');

export class AuthController {
  constructor(){

  }

  static login(req, res) {
    User.findOne({email: req.body.email}).then(loginUser => {
      if(!loginUser) {
        return res.status(401).json({message: 'Invalid username or password'})
      }
      if(!loginUser.validatePassword(req.body.password)) {
        return res.status(401).json({message: 'Invalid username or password'})
      }
      const withTokem = {email: loginUser.email, _id: loginUser._id};
      withTokem.token = loginUser.generateJWT();
      res.status(200).json(withTokem)
    })
  }

  static register(req, res){
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
      })
      newUser.password = newUser.generateHash(req.body.password);
      newUser.save().then(rec => {
        res.status(201).json(rec)
      })
  }

  static forgetPassword(request,response){

  }

  static resetPassword(request,response){}
}
