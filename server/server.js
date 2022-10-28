const express = require("express");
const cors = require("cors")

require('dotenv').config()

const app = express();
const port = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// connect to db
require("./config/mongoose.config");

require("./routes/times.routes")(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );

