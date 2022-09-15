import { DataTypes, Model } from "sequelize";
import db from "../../config/database.config";

interface SuperTeamAttributes {
	id: string;
	name: string;
	hero_id:string;
}

export class SuperTeamInstance
	extends Model<SuperTeamAttributes>
	implements SuperTeamAttributes
{
	id!: string;
	name!: string;
	hero_id!: string;
}

SuperTeamInstance.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		hero_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		tableName: "super-hero",
		modelName: "SuperTeamInstance",
	}
);