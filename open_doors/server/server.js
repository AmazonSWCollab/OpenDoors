const express = require("express")
const axios = require("axios")
const app = express()
const PORT = 5000



app.get("/api", (req, res) => {
    axios
      .get("http://localhost:3001/businesses")
      .then(response => {
        res.json(response.data)
    })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})