import { body, query, param } from "express-validator";

class SuperTeamRouterValidator {
	checkCreateSuperTeam() {
		return [
			body("name").notEmpty().withMessage("The name value should not be empty"),
			body("hero_id").notEmpty().withMessage("The hero_id value should not be empty"),
		];
	}
	checkReadSuperTeam() {
		return [
			query("limit")
				.optional()
				.isInt({ min: 1, max: 10 })
				.withMessage("The limit value should be number and between 1-10"),
			query("offset")
				.optional()
				.isNumeric()
				.withMessage("The value should be number"),
		];
	}
	checkIdParam() {
		return [
			param("id")
				.notEmpty()
				.withMessage("The value should be not empty")
				.isNumeric()
				.withMessage("The value should be uuid v4"),
		];
	}
}

export default new SuperTeamRouterValidator();
