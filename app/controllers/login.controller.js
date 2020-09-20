const login_model = require("../models/login.model");
// const Login = db.login;
// const Op = db.Sequelize.Op;

 

 
// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
  const id = req.params;
  // const user = await User.findOne({email: req.body.email})
  const getUser = await login_model.UserData();
 
    console.log('getUser');
    console.log(getUser);
     
      
   
 
    
}; 