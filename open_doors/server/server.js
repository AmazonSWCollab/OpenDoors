import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"
import axios from "axios"


//import fetch from 'node-fetch';

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))


const PORT2 = 5001

app.get("/api", (req, res) =>
    axios
      .get("http://localhost:3001/businesses")
      .then(response => res.json(response.data))
)

app.get("/admin", (req, res) => {

})

app.listen(PORT2, () => {
    console.log(`Server started on port ${PORT2}`)
})

export default app
