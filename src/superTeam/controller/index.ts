import { Request, Response } from "express";
import { SuperTeamInstance } from "../model";

class SuperTeamController {
  async create(req: Request, res: Response) {
    try {
      const record = await SuperTeamInstance.create({ ...req.body });
      return res.json({ record, msg: "Successfully create SuperTeam" });
    } catch (e) {
      return res.json({
        msg: "fail to create",
        status: 500,
        route: "/super-hero",
      });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const limit = (req.query.limit as number | undefined) || 10;
      const offset = req.query.offset as number | undefined;

      const records = await SuperTeamInstance.findAll({
        where: {},
        limit,
        offset,
      });
      return res.json(records);
    } catch (e) {
      return res.json({
        msg: "fail to read",
        status: 500,
        route: "/super-hero",
      });
    }
  }

  async removeById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const row = await SuperTeamInstance.findOne({
        where: { hero_id: id },
      });
      if (row) {
        await row.destroy(); // deletes the row
      }
      return res.json({ msg: "deleted success" });
    } catch (e) {
      return res.json({
        msg: "fail to read",
        status: 500,
        route: "/super-hero",
        e,
      });
    }
  }
}

export default new SuperTeamController();
