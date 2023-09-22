const Application = require("./app/server");
const DB_URL = // write your mongoDB URL here for connect ;
require("dotenv").config();
new Application(3500, DB_URL) 