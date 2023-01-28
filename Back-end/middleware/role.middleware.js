const jwt = require("jsonwebtoken");

const verifyRole = (...allowedRoles) => {
  return (req, res, next) => {
    const token = req.body.token || req.headers.token;

    if (!token)
      return res.status(403).send("A token is required for authentication");

      try {
        const payload = jwt.verify(token, process.env.TOKEN_KEY);
  
        if (!payload) return res.send("Unauthorized");
  
        if (!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const result = req.roles
          .map((role) => rolesArray.includes(role))
            .find((val) => val === true);
          console.log(rolesArray)
        if (!result) return res.sendStatus(401);
        next();
      } catch (error) {
        throw res.send({ error });
      }
  };
};

module.exports =  verifyRole;
