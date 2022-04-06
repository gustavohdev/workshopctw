require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT

require("./app/routes/user.routes")(app);

app.listen(port, () => console.log(`console up and running at ${port}`))