module.exports.profile = function (req, res) {
  return res.render("users" , {
    title: "Users"
  });
};

module.exports.posts = function (req , res) {
    res.end("<h1>Users Posts</h1>");
};