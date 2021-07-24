const express = require("express");
const cors = require("cors")
require("dotenv").config();


const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.DEV) {
	const morgan = require("morgan");
	app.use(morgan("dev"));
}

app.listen(PORT, () => {
	console.log("Server has been started on port: ", PORT);
});
