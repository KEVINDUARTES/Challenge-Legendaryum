function isAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }
    next();
  }
  
  module.exports = isAuthenticated;
  