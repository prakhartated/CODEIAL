const User = require('../models/user');

module.exports.profile = function (req, res) {
  return res.render("users" , {
    title: "Users"
  });
};

module.exports.posts = function (req , res) {
  res.end("<h1>Users Posts</h1>");
};

// render the sign up page
module.exports.signUp = function (req , res) {
  return res.render('user_sign_up' , {
    title: "Codeial | Sign Up"
  })
};

// render the sign in page
module.exports.signIn = function (req , res) {
  return res.render('user_sign_in' , {
    title: "Codeial | Sign In"
  })
};

// get the Sign up data
module.exports.create = function (req , res) {
  // TODO Later
  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back');
  }

  User.findOne({email: req.body.email} , function (err , user) {
    if (err) {
      console.log("Error in Finding User in signing up");
      return;
    }

    if (!user) {
      User.create(req.body , function (err , user) {
        if (err) {
          console.log("Error in Creating User while Signing Up" , err);
          return;
        }

        return res.redirect('/users/sign-in');
      })
    }else{
      return res.redirect('back');
    }
  });
};

// Sign In and Create a Session for User
module.exports.createSession = function (req , res) {
  // TODO Later
}