import jwtmod from "jsonwebtoken";

const authenticated = async (req, res, next) => {
  const authorize = req.headers["authorization"];

  const token = authorize && authorize.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLIC_KEY}\n-----END PUBLIC KEY-----`;

  const decodeToken = jwtmod.verify(token, public_key, {
    algorithms: ["RS256"],
  });

  const { email, name } = decodeToken;

  req.user = { email, name };

  next();
};

export default authenticated;
