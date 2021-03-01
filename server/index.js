require("dotenv").config();
const Express = require("express");
const cors = require("cors");
const path = require("path");
//const v1 = require("./api-v1");

const app = Express();
const port = process.env.PORT || 3300;

//Middlewares
app.use(cors());
app.use(Express.urlencoded({extended: true}));
app.use(Express.json());
app.use("../client/build", Express.static(path.join(__dirname, html_dir)));
//app.use(v1.path, v1.route);
app.get("/", (req, res) => {
	res.json("Firavahana server side.");
});

//Listen
app.listen(port, () => {
	console.log("Firavahana server running on port " + port);
});