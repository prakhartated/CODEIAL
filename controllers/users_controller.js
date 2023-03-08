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
module.exports.Create = function (req , res) {
  // TODO Later
};

// Sign In and Create a Session for User
module.exports.createSession = function (req , res) {
  // TODO Later
}