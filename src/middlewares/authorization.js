const authorizationMiddleware = (roles) => {
  return (req, res, next) => {
    // Verifica si el usuario tiene el rol necesario
    if (roles.includes(req.user.role)) {
      return next();
    }

    return res.status(403).json({ message: "Forbidden" });
  };
};

module.exports = authorizationMiddleware;
