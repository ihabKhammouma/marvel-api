import express from "express";
import SuperTeamRouterValidator from "../validator";
import Middleware from "../../middleware";
import SuperTeamController from "../controller";

const router = express.Router();

router.post(
	"/",
	SuperTeamRouterValidator.checkCreateSuperTeam(),
	Middleware.isAuth,
	Middleware.handleValidationError,
	SuperTeamController.create
);
router.get(
	"/",
	SuperTeamRouterValidator.checkReadSuperTeam(),
	Middleware.isAuth,
	Middleware.handleValidationError,
	SuperTeamController.getAll
);
router.delete(
	"/:id",
	SuperTeamRouterValidator.checkIdParam(),
	Middleware.isAuth,
	Middleware.handleValidationError,
	SuperTeamController.removeById
);
export default router;
