import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

class Middleware {
  handleValidationError(req: Request, res: Response, next: NextFunction) {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.json(error.array()[0]);
    }
    next();
  }
  isAuth(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    const token = req.header("x-token");
    console.log(process.env.token, token);
    if (token != process.env.token)
      return res.status(401).json({ auth: false, msg: "check you token" });
    next();
  }
}
export default new Middleware();
