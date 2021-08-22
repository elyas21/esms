module.exports = function(accessLevel) {
  function checkUserRole(req, res, next) {
    // console.log(accessLevel + 'dddd')
    // console.log(req.user.type)
    if (accessLevel != req.user.type) {
      res.sendStatus(403);
      return;
    }

    next();
  }

  return checkUserRole;
};
