import express from "express"
import axios from "axios"
import restaurants from "./api/restaurants.route.js"

//import fetch from 'node-fetch';

import cors from "cors"
//import restaurants from "./api/restaurants.route.js"

const app = express()
const PORT = 5001


app.use(cors())
app.use(express.json)
app.use("/api/v1/restaurants", restaurants)

app.get("/api", (req, res) =>
    axios
      .get("http://localhost:3001/businesses")
      .then(response => res.json(response.data))
)

app.get("/admin", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

export default app
