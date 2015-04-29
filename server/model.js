import Sequelize from "sequelize";
import path from "path";

let sequelize = new Sequelize(null, null, null,   {
    dialect: "sqlite",
    storage: path.resolve(".", "database.sqlite"),
    logging: false
});

let Workout = sequelize.define("Workout", {
    name: { type: Sequelize.TEXT },
    distance: { type: Sequelize.INTEGER },
    elapsed_time: { type: Sequelize.INTEGER },
    avg_speed: { type: Sequelize.INTEGER},
    strava_id: { type: Sequelize.INTEGER}
});

export default Workout;
